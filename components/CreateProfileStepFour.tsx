import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React, { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

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

interface CreateProfileStepFourProps {
  form: FormData;
  next: () => void;
  updateField: (key: keyof FormData, value: string | number) => void;
}

const CreateProfileStepFour = ({
  form,
  next,
  updateField,
}: CreateProfileStepFourProps) => {
  const [tin, setTin] = useState<string>("");

  useEffect(() => {
    if (form.tin) {
      setTin(form.tin);
    }
  });

  const handleFormSubmit = async () => {
    updateField("tin", tin);
    next();
  };

  return (
    <View className="flex-1 justify-between">
      <View>
        <Text className="text-4xl text-white mb-2 mt-10">
          A quick financial question about how you pay tax.
        </Text>
        <View className="mt-4 gap-2">
          <Text className="text-[#ccc] text-lg">
            Tax Identification Number (TIN){" "}
            <FontAwesome5 name="question-circle" size={18} color="white" />
          </Text>
          <View className="py-1 px-4 bg-[#5d4d7082] rounded-sm">
            <TextInput
              placeholder="tax number"
              onChangeText={(t) => setTin(t)}
              placeholderTextColor={"#eee"}
              maxLength={12}
              value={tin}
              className="text-lg text-gray-200"
            />
          </View>
        </View>
      </View>
      <Pressable
        onPress={handleFormSubmit}
        className="bg-nemo-bluePurple rounded-full items-center justify-center py-4"
      >
        <Text className="text-white text-lg text-center">Continue</Text>
      </Pressable>
    </View>
  );
};

export default CreateProfileStepFour;
