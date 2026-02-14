import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
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
};

interface CreateProfileStepOneProps {
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
}: CreateProfileStepOneProps) => {
  const { control, handleSubmit, setValue } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (form.firstName) {
      setValue("firstName", form.firstName);
    }
    console.log(form.firstName);
    if (form.lastName) {
      setValue("lastName", form.lastName);
    }
    if (form.sex) {
      setValue("sex", form.sex);
    }
  });

  const handleFormSubmit = async ({ firstName, lastName, sex }: any) => {
    updateField("firstName", firstName);
    updateField("lastName", lastName);
    updateField("sex", sex);
    next();
  };

  return (
    <View className="flex-1 justify-between">
      <View>
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
                <View className="py-1 px-4 bg-[#5d4d7082] rounded-sm">
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
                <View className="py-1 px-4 bg-[#5d4d7082] rounded-sm">
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
          render={({ field: { value }, fieldState: { error } }) => (
            <>
              <Text className="text-[#ccc] text-lg mt-4">Sex</Text>
              <View className="flex-row gap-5">
                <Pressable
                  className="mt-4 gap-2 flex-1"
                  onPress={() => setValue("sex", "Male")}
                >
                  <View
                    className="py-1 px-6 h-14 gap-4 border-2 rounded-md border-[#5d4d7082] flex-row items-center justify-center"
                    style={{
                      backgroundColor:
                        value === "Male" ? "#5d4d7082" : "transparent",
                    }}
                  >
                    <Text className="text-[#eee] text-xl">Male</Text>
                  </View>
                </Pressable>
                <Pressable
                  className="mt-4 gap-2 flex-1"
                  onPress={() => setValue("sex", "Female")}
                >
                  <View
                    className="py-1 px-6 h-14 gap-4 border-2 rounded-md border-[#5d4d7082] flex-row items-center justify-center"
                    style={{
                      backgroundColor:
                        value === "Female" ? "#5d4d7082" : "transparent",
                    }}
                  >
                    <Text className="text-[#eee] text-xl">Female</Text>
                  </View>
                </Pressable>
              </View>
              {error && (
                <Text className="text-xs text-red-500">{error.message}</Text>
              )}
            </>
          )}
        />
      </View>
      <Pressable
        onPress={handleSubmit(handleFormSubmit)}
        className="bg-nemo-bluePurple rounded-full items-center justify-center py-4"
      >
        <Text className="text-white text-lg text-center">Continue</Text>
      </Pressable>
    </View>
  );
};

export default CreateProfileStepOne;
