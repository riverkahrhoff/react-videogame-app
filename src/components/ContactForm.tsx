"use client";

import {
  Button,
  Field,
  Flex,
  HStack,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);

    const templateParams = {
      name: data.firstName + " " + data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      message: data.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Message sent!");
        reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <Flex paddingTop={5}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="4" maxW="sm">
          <HStack>
            <Field.Root invalid={!!errors.firstName}>
              <Field.Label>First name</Field.Label>
              <Input
                variant="flushed"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.lastName}>
              <Field.Label>Last name</Field.Label>
              <Input
                variant="flushed"
                {...register("lastName", { required: "Last name is required" })}
              />
              <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
            </Field.Root>
          </HStack>
          <Field.Root invalid={!!errors.phoneNumber}>
            <Field.Label>Phone Number</Field.Label>
            <Input
              variant="flushed"
              placeholder="(000) 000-0000"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
            />
            <Field.ErrorText>{errors.phoneNumber?.message}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.email}>
            <Field.Label>Email</Field.Label>
            <Input
              variant="flushed"
              placeholder="me@example.com"
              {...register("email", { required: "Email is required" })}
            />
            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.message}>
            <Field.Label>Message</Field.Label>
            <Textarea
              variant="flushed"
              placeholder="Message..."
              {...register("message", { required: "Message is required" })}
            />
            <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
          </Field.Root>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Flex>
  );
};

export default ContactForm;
