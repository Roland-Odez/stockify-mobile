import SignUpStepOne from "@/components/SignUpStepOne";
import SignUpStepThree from "@/components/SignUpStepThree";
import SignUpStepTwo from "@/components/SignUpStepTwo";
import { usePersistentForm } from "@/hooks/use-persistent-store";
import { useAuth } from "@/hooks/useAuthContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Redirect, useRouter } from "expo-router";
import { ActivityIndicator, Pressable, View } from "react-native";

const EmailSignup = () => {
  const router = useRouter();
  const { form, nextForm, prevForm, updateField, clearForm } =
    usePersistentForm();
  const { session, loading } = useAuth();

  const handleNavigation = () => {
    if (form.step > 1) {
      prevForm();
    } else {
      clearForm();
      router.back();
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (session) {
    return <Redirect href="/(tabs)/discovery" />;
  }

  return (
    <View className="pt-16 bg-[#130b1d] flex-1 p-safe-offset-4 z-0">
      <View className="px-2 flex-row items-center gap-3">
        <Pressable onPress={handleNavigation} className="z-[999]">
          <View className="w-14 h-14 border border-white rounded-full items-center justify-center">
            <Ionicons name="arrow-back-sharp" size={24} color="white" />
          </View>
        </Pressable>
        <View className="flex-1 h-2.5 bg-gray-500 rounded-full overflow-hidden">
          <View
            className="h-full bg-blue-600"
            style={{ width: `${(form.step / form.totalStep) * 100}%` }}
          ></View>
        </View>
      </View>

      <View className="flex-1">
        {form.step === 1 && (
          <SignUpStepOne
            form={form}
            next={nextForm}
            updateField={updateField}
          />
        )}
        {form.step === 2 && <SignUpStepTwo form={form} next={nextForm} />}
        {form.step === 3 && (
          <SignUpStepThree form={form} clearForm={clearForm} />
        )}
      </View>
    </View>
  );
};

export default EmailSignup;
