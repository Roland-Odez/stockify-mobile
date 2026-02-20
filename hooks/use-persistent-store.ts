import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const STORAGE_KEY = "contact-form";

export function usePersistentForm() {
  const [form, setForm] = useState<PersistentData>({
    step: 1,
    totalStep: 8,
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    sex: null,
    nationality: "",
    dob: null,
    city: "",
    tin: "",
  });

  // Load saved form
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((data) => {
      if (data) setForm(JSON.parse(data));
    });
  }, []);

  // Save on change
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  function updateField(
    key: keyof PersistentData,
    value: string | number | Date,
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function nextForm() {
    if (!(form.step >= 8)) {
      setForm((prev) => ({ ...prev, step: prev.step + 1 }));
    }
  }

  function prevForm() {
    if (form.step > 1) {
      setForm((prev) => ({ ...prev, step: prev.step - 1 }));
    }
  }

  function clearForm() {
    AsyncStorage.removeItem(STORAGE_KEY);
    setForm({
      phone: "",
      email: "",
      step: 1,
      totalStep: 8,
      dob: null,
      firstName: "",
      lastName: "",
      nationality: "",
      sex: null,
      city: "",
      tin: "",
    });
  }

  return { form, updateField, clearForm, nextForm, prevForm };
}
