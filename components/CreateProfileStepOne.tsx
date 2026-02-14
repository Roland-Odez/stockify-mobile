import { Checkbox } from "@futurejj/react-native-checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import { z } from "zod";

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
  signature: string;
};

interface SignUpStepOneProps {
  form: FormData;
  next: () => void;
  updateField: (key: keyof FormData, value: string | number) => void;
}

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  sex: z.enum(["Male", "Female"], {
    error: "sex is requierd",
  }),
});

const CreateProfileStepOne = ({
  form,
  next,
  updateField,
}: SignUpStepOneProps) => {
  const [checked, setChecked] = useState<boolean>(false);
  const { control, handleSubmit, setValue } = useForm({
    resolver: zodResolver(schema),
  });
  useEffect(() => {
    if (form.firstName) {
      setValue("firstName", form.firstName);
    }
    if (form.lastName) {
      setValue("lastName", form.lastName);
    }
  });

  const handleFormSubmit = async ({ firtName, lastName }: any) => {
    updateField("firstName", firtName);
    updateField("lastName", lastName);
    next();
  };

  return (
    <View className="flex-1">
      <Text className="text-4xl text-white mb-2 mt-10">
        Thanks! Next, let's complete your profile
      </Text>
      <Controller
        control={control}
        name="firstName"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <View className="mt-4 gap-2">
              <Text className="text-[#ccc] text-lg">First Name</Text>
              <View className="py-1 px-4 bg-[#f9f9f928]">
                <TextInput
                  placeholder="Enter your first name"
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
        name="lastName"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <View className="mt-4 gap-2">
              <Text className="text-[#ccc] text-lg">Last Name</Text>
              <View className="py-1 px-4 bg-[#f9f9f928]">
                <TextInput
                  placeholder="Enter your last name"
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
        name="sex"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <View className="flex-row gap-5">
              <View className="mt-4 gap-2">
                <Text className="text-[#ccc] text-lg">Country</Text>
                <View className="py-1 px-6 h-14 gap-4 bg-[#f9f9f928] flex-row items-center">
                  <Text className="text-[#eee] text-xl">Male</Text>
                </View>
              </View>
              <View className="mt-4 gap-2">
                <View className="py-1 px-6 h-14 gap-4 bg-[#f9f9f928] flex-row items-center">
                  <Text className="text-[#eee] text-xl">Female</Text>
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

export default CreateProfileStepOne;
