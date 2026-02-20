import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

interface CreateProfileStepThreeProps {
  form: PersistentData;
  next: () => void;
  updateField: (
    key: keyof PersistentData,
    value: string | number | Date,
  ) => void;
}

const CreateProfileStepThree = ({
  form,
  next,
  updateField,
}: CreateProfileStepThreeProps) => {
  const [showDate, setShowDate] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [city, setCity] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleChangeDate = (
    event: DateTimePickerEvent,
    date?: Date | undefined,
  ) => {
    if (date && event.type === "set") {
      setDate(date);
    }
    setShowDate(false);
  };

  useEffect(() => {
    if (form.dob) {
      const newDate = new Date(form.dob);
      setDate(newDate);
    }
    if (form.city) {
      setCity(form.city);
    }
    if (form.phone) {
      setPhone(form.phone);
    }
  }, [form.dob, form.city, form.phone]);

  const handleFormSubmit = async () => {
    updateField("dob", date);
    updateField("city", city);
    updateField("phone", phone);
    next();
  };

  return (
    <View className="flex-1 justify-between">
      <View>
        <Text className="text-4xl text-white mb-2 mt-10">
          Thanks! Next, let's complete your profile
        </Text>
        <>
          <View className="mt-4 gap-2">
            <Text className="text-[#ccc] text-lg">Date of birth</Text>
            <View className="py-1 px-4 bg-[#5d4d7082] flex-row justify-between items-center rounded-sm">
              <TextInput
                readOnly={true}
                className="text-lg text-gray-200"
                value={date.toLocaleDateString()}
              />
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={24}
                color="white"
                onPress={() => setShowDate(true)}
              />
            </View>
            {showDate && (
              <DateTimePicker
                value={date}
                mode="date"
                design="material"
                display="default"
                onChange={handleChangeDate}
              />
            )}
          </View>
          <View className="mt-4 gap-2">
            <Text className="text-[#ccc] text-lg">City</Text>
            <View className="py-1 px-4 bg-[#5d4d7082] rounded-sm">
              <TextInput
                className="text-lg text-gray-200"
                value={city}
                onChangeText={(t) => setCity(t)}
              />
            </View>
          </View>
          <View className="mt-4 gap-2">
            <Text className="text-[#ccc] text-lg">Phone number</Text>
            <View className="py-1 px-4 bg-[#5d4d7082] rounded-sm">
              <TextInput
                className="text-lg text-gray-200"
                value={phone}
                onChangeText={(t) => setPhone(t)}
              />
            </View>
          </View>
        </>
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

export default CreateProfileStepThree;
