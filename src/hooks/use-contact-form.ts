import { useCallback, useState } from "react";

export const useContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const submit = useCallback(() => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }, []);

  return {
    name,
    email,
    submit,
    subject,
    message,
    setName,
    setEmail,
    setSubject,
    setMessage,
  };
};
