import Feather from "@expo/vector-icons/Feather";
import { Checkbox } from "@futurejj/react-native-checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import { z } from "zod";

type FormData = {
  step: number;
  email: string;
  phone: string;
};

interface SignUpStepOneProps {
  form: FormData;
  next: () => void;
  updateField: (key: keyof FormData, value: string | number) => void;
}

const schema = z.object({
  email: z.email("email is required"),
  phone: z
    .string()
    .max(10, "Phone number must be exactly 10 digits")
    .min(10, "Phone number must be exactly 10 digits"),
});

const SignUpStepOne = ({ form, next, updateField }: SignUpStepOneProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const { control, handleSubmit, setValue } = useForm({
    resolver: zodResolver(schema),
  });
  useEffect(() => {
    if (form.email) {
      setValue("email", form.email);
    }
    if (form.phone) {
      setValue("phone", form.phone);
    }
  });

  const handleFormSubmit = async ({ email, phone }: any) => {
    updateField("email", email);
    updateField("phone", phone);
    next();
  };

  return (
    <View className="flex-1">
      <Text className="text-4xl text-white mb-2 mt-10">
        Let's take some contact details.
      </Text>
      <Text className="text-gray-400 text-lg">
        We will send secure codes to your email and phone to know if is really
        you
      </Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <View className="mt-4 gap-2">
              <Text className="text-[#ccc] text-lg">Email</Text>
              <View className="py-1 px-4 bg-[#f9f9f928]">
                <TextInput
                  placeholder="Email address"
                  onChangeText={onChange}
                  placeholderTextColor={"#eee"}
                  value={value}
                  className="text-lg text-gray-200"
                />
              </View>
            </View>
            {error && (
              <Text className="text-xs text-red-500">{error.message}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="phone"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <View className="flex-row gap-5">
              <View className="mt-4 gap-2">
                <Text className="text-[#ccc] text-lg">Country</Text>
                <View className="py-1 px-6 h-14 gap-4 bg-[#f9f9f928] flex-row items-center">
                  <Text className="text-[#eee] text-xl">+234</Text>
                  <Feather name="chevron-down" size={20} color={"#eee"} />
                </View>
              </View>
              <View className="mt-4 gap-2 flex-1">
                <Text className="text-[#ccc] text-lg">Phone</Text>
                <View className="py-1 px-4 bg-[#f9f9f928]">
                  <TextInput
                    placeholder="Your phone number"
                    placeholderTextColor={"#eee"}
                    onChangeText={onChange}
                    value={value}
                    className="text-lg text-gray-200"
                  />
                </View>
              </View>
            </View>
            {error && (
              <Text className="text-xs text-red-500">{error.message}</Text>
            )}
          </>
        )}
      />

      <View className="flex-row mt-5 gap-2 items-start flex-1">
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked(!checked)}
        />
        <Text className="text-[#ccc] text-lg mt-1 flex-1">
          I agree to Stockify{" "}
          <Text className="underline">Terms and conditions</Text> and understand
          that by continuing i am agreeing to be contacted about product news
          and update
        </Text>
      </View>
      <Pressable
        style={{ opacity: checked ? 1 : 0.5 }}
        disabled={!checked}
        onPress={handleSubmit(handleFormSubmit)}
        className="bg-nemo-bluePurple rounded-full items-center justify-center py-4"
      >
        <Text className="text-white text-lg text-center">Continue</Text>
      </Pressable>
    </View>
  );
};

export default SignUpStepOne;
