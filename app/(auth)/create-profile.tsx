import CreateProfileStepFive from "@/components/CreateProfileStepFive";
import CreateProfileStepFour from "@/components/CreateProfileStepFour";
import CreateProfileStepOne from "@/components/CreateProfileStepOne";
import CreateProfileStepThree from "@/components/CreateProfileStepThree";
import CreateProfileStepTwo from "@/components/CreateProfileStepTwo";
import { usePersistentForm } from "@/hooks/use-persistent-store";
import { supabase } from "@/utils/supabase";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, View } from "react-native";

const CreateProfile = () => {
  const router = useRouter();
  const { form, nextForm, prevForm, updateField, clearForm } =
    usePersistentForm();

  const handleNavigation = () => {
    if (form.step >= 5) {
      prevForm();
    } else {
      clearForm();
      updateField("step", 4);
      router.back();
    }
  };

  useEffect(() => {
    const checkProfileCreated = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const { data } = await supabase
        .from("profiles")
        .select("signature")
        .eq("id", session?.user.user_metadata.sub)
        .single();

      if (data) {
        router.back();
      }
    };

    checkProfileCreated();
  }, []);
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
        {form.step === 4 && (
          <CreateProfileStepOne
            form={form}
            next={nextForm}
            updateField={updateField}
          />
        )}
        {form.step === 5 && (
          <CreateProfileStepTwo
            form={form}
            next={nextForm}
            updateField={updateField}
          />
        )}
        {form.step === 6 && (
          <CreateProfileStepThree
            form={form}
            next={nextForm}
            updateField={updateField}
          />
        )}
        {form.step === 7 && (
          <CreateProfileStepFour
            form={form}
            next={nextForm}
            updateField={updateField}
          />
        )}
        {form.step === 8 && (
          <CreateProfileStepFive
            form={form}
            next={nextForm}
            updateField={updateField}
          />
        )}
      </View>
    </View>
  );
};

export default CreateProfile;
