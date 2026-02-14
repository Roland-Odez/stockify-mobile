import { supabase } from "@/utils/supabase";
import { Checkbox } from "@futurejj/react-native-checkbox";
import { Link, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

type FormData = {
  step: number;
  totalStep: number;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  sex: "Male" | "Female" | null;
  nationality: string;
  dob: Date | null;
  city: string;
  tin: string;
};

interface CreateProfileStepThreeProps {
  form: FormData;
  next: () => void;
  updateField: (key: keyof FormData, value: string | number) => void;
}

const CreateProfileStepFive = ({
  form,
  next,
  updateField,
}: CreateProfileStepThreeProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [secondChecked, setSecondChecked] = useState<boolean>(false);
  const [signature, setSignature] = useState<string>("");
  const [user_id, setUserId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    async function checkUserLogin() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const userExist = session?.user;

      if (userExist) {
        setUserId(userExist.user_metadata.sub);
      }
    }
    checkUserLogin();
  });

  const handleFormSubmit = async () => {
    setLoading(true);
    const { firstName, lastName, city, dob, nationality, sex, tin } = form;
    if (signature.toLowerCase().includes(firstName.toLowerCase())) {
      const { error } = await supabase.from("profiles").insert({
        first_name: firstName,
        last_name: lastName,
        sex,
        user_id,
        nationality,
        dob,
        tin,
        city,
        signature: true,
      });

      setLoading(false);
      if (error) {
        Toast.show({
          type: ALERT_TYPE.WARNING,
          textBody: error.message,
        });
      }

      if (!error) {
        router.push("/(auth)/auth-complete");
      }
    } else {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        textBody: "Signature not valid",
      });
    }
  };

  return (
    <View className="flex-1 justify-between">
      <View>
        <Text className="text-4xl text-white mb-2 mt-10">Almost there!</Text>
        <Text className="text-gray-400 text-xl my-3">
          To use Stockify you need to review and agree to our policies
        </Text>
        <View>
          <Link href={"/privacy"} className="text-white text-xl underline">
            Privacy Policy
          </Link>
        </View>
        <>
          <View className="flex-row mt-5 gap-2 items-start">
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
            />
            <View>
              <Text className="text-white text-lg mt-1 font-bold">
                I Certify that the info I entered is correct to fill out is
                correct, confirming that i am not a US person or a tax resident
                in a country with a US tax treaty
              </Text>
              <View className="mt-4 gap-2">
                <Text className="text-white text-lg font-bold">
                  Type your name and sign
                </Text>
                <View className="py-1 px-4 bg-[#5d4d7082] rounded-sm">
                  <TextInput
                    className="text-lg text-gray-200"
                    value={signature}
                    placeholder="sign your name"
                    placeholderTextColor="#ccc"
                    onChangeText={(t) => setSignature(t)}
                  />
                </View>
              </View>
            </View>
          </View>
          <View className="flex-row mt-5 gap-2 items-start">
            <Checkbox
              status={secondChecked ? "checked" : "unchecked"}
              onPress={() => setSecondChecked(!secondChecked)}
            />
            <Text className="text-white mt-2 text-lg flex-1 font-bold">
              I have read, understood and agree to all policies and agreements
            </Text>
          </View>
        </>
      </View>
      <Pressable
        onPress={handleFormSubmit}
        disabled={
          checked && secondChecked && signature && !loading ? false : true
        }
        style={{
          opacity: checked && secondChecked && signature && !loading ? 1 : 0.5,
        }}
        className="bg-nemo-bluePurple rounded-full items-center justify-center py-4"
      >
        {loading ? (
          <ActivityIndicator size={"small"} color={"#ddd"} />
        ) : (
          <Text className="text-white text-lg text-center">Submit</Text>
        )}
      </Pressable>
    </View>
  );
};

export default CreateProfileStepFive;
