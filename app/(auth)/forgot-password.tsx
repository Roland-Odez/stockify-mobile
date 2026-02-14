import SingleRadio from "@/components/SingleRadio";
import { supabase } from "@/utils/supabase";
import { validatePassword } from "@/utils/validatePassword";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Link } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

type RecoveryStep =
  | "EMAIL"
  | "VERIFY_CODE"
  | "RESET_PASSWORD"
  | "PASSWORD_CHANGED";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [recoverySteps, setRecoverySteps] = useState<RecoveryStep>("EMAIL");

  const handleRequestPasswordChange = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: "Error",
        textBody: error.message,
      });
    }
    if (!error) setRecoverySteps("VERIFY_CODE");
  };

  switch (recoverySteps) {
    case "EMAIL":
      return (
        <View className="pt-2 bg-[#130b1d] flex-1 justify-between p-safe-offset-4">
          <View>
            <Text className="text-3xl text-white mb-2">
              Let's help you reset your Stockify password. Enter an email
              address below.
            </Text>
            <View className="mt-4 gap-2">
              <Text className="text-[#ccc] text-lg">Email</Text>
              <View className="py-1 px-4 border border-[#d4d2d27a] rounded-lg">
                <TextInput
                  placeholder="Your Email"
                  placeholderTextColor={"#d4d2d288"}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={(t) => setEmail(t)}
                  value={email}
                  className="text-lg text-gray-200"
                />
              </View>
            </View>
          </View>
          <Pressable
            onPress={handleRequestPasswordChange}
            className="items-center justify-center py-4 bg-nemo-bluePurple rounded-md"
          >
            <Text className="text-white text-lg text-center">
              Check for account
            </Text>
          </Pressable>
        </View>
      );

    case "VERIFY_CODE":
      return (
        <VerifyResetCode email={email} setRecoverySteps={setRecoverySteps} />
      );

    case "RESET_PASSWORD":
      return (
        <ResetPassword email={email} setRecoverySteps={setRecoverySteps} />
      );

    case "PASSWORD_CHANGED":
      return <PasswordChanged />;
  }
};

const VerifyResetCode = ({
  email,
  setRecoverySteps,
}: {
  email: string;
  setRecoverySteps: (t: RecoveryStep) => void;
}) => {
  const [code, setCode] = useState("");

  const verify = async () => {
    const { error } = await supabase.auth.verifyOtp({
      email,
      token: code,
      type: "recovery",
    });
    if (error) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: "Error",
        textBody: error.message,
      });
    }
    if (!error) setRecoverySteps("RESET_PASSWORD");
  };

  return (
    <View className="pt-2 bg-[#130b1d] flex-1 justify-between p-safe-offset-4">
      <View>
        <Text className="text-3xl text-white mb-2">
          Enter OTP code sent to {email}
        </Text>
        <View className="mt-4 gap-2">
          <Text className="text-[#ccc] text-lg">Code</Text>
          <View className="py-1 px-4 border border-[#d4d2d27a] rounded-lg">
            <TextInput
              placeholder="Enter code"
              placeholderTextColor={"#d4d2d288"}
              keyboardType="number-pad"
              maxLength={6}
              onChangeText={(t) => setCode(t)}
              value={code}
              className="text-lg text-gray-200"
            />
          </View>
        </View>
      </View>
      <Pressable
        onPress={verify}
        className="items-center justify-center py-4 bg-nemo-bluePurple rounded-md"
      >
        <Text className="text-white text-lg text-center">Verify</Text>
      </Pressable>
    </View>
  );
};

const ResetPassword = ({
  email,
  setRecoverySteps,
}: {
  email: string;
  setRecoverySteps: (t: RecoveryStep) => void;
}) => {
  const [newPassword, setNewPassword] = useState("");
  const [minChar, setMinChar] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [conLetNum, setConLetNum] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const resetPassword = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.updateUser({
        email,
        password: newPassword,
      });

      if (error) throw error;
      if (!error) setRecoverySteps("PASSWORD_CHANGED");
    } catch (err: any) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: "Error",
        textBody: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChangeText = (text: string) => {
    setNewPassword(text);
    const { hasLetterAndNumber, hasMinLength, isValid } =
      validatePassword(text);
    setConLetNum(hasLetterAndNumber);
    setMinChar(hasMinLength);
    setDisabled(!isValid);
  };

  return (
    <View className="pt-2 bg-[#130b1d] flex-1 justify-between p-safe-offset-4">
      <View>
        <Text className="text-3xl text-white mb-2">Enter New Password</Text>
        <View className="mt-4 gap-2">
          <View className="py-1 px-4 border border-[#d4d2d27a] rounded-lg flex-row">
            <TextInput
              placeholder="Enter new password"
              placeholderTextColor={"#d4d2d288"}
              secureTextEntry={showPassword}
              onChangeText={handleChangeText}
              value={newPassword}
              className="text-lg text-gray-200 flex-1 items-center"
            />
            <Pressable
              onPress={() => setShowPassword((val) => !val)}
              className="justify-center px-2"
            >
              {showPassword ? (
                <Ionicons name="eye" size={24} color="#eee" />
              ) : (
                <Ionicons name="eye-off-sharp" size={24} color="#eee" />
              )}
            </Pressable>
          </View>
        </View>
        <View className="mt-3">
          <SingleRadio
            selected={conLetNum}
            text="Contains letters and numbers"
          />
          <SingleRadio selected={minChar} text="At least 12 characters" />
        </View>
      </View>
      <Pressable
        onPress={resetPassword}
        disabled={disabled}
        style={{ opacity: disabled ? 0.5 : 1 }}
        className="items-center justify-center py-4 bg-nemo-bluePurple rounded-md"
      >
        {loading ? (
          <ActivityIndicator size={"small"} color={"#ddd"} />
        ) : (
          <Text className="text-white text-lg text-center">
            Change password
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const PasswordChanged = () => {
  return (
    <View className="pt-2 bg-[#0c192bf2] flex-1 justify-between p-safe-offset-4">
      <View>
        <SimpleLineIcons
          name="check"
          size={50}
          color="white"
          className="text-center my-3"
        />
        <Text className="text-2xl text-white mb-2 font-bold text-center">
          Password updated
        </Text>
        <Text className="text-lg text-white mb-2 font-bold text-center">
          Your password has been changed successfully. Use your new password to
          log in.
        </Text>
      </View>
      <Link
        href={"/(auth)/email-login"}
        className="items-center justify-center py-4 bg-nemo-bluePurple rounded-md"
      >
        <Text className="text-white text-lg text-center">Back to login</Text>
      </Link>
    </View>
  );
};

export default ForgotPassword;
