import React from "react";
import tw, { styled } from "twin.macro";

export const Container = styled.div(() => [tw`col-span-3 sm:(col-span-2)`]);

export const StyledLabel = styled.label(() => [
  tw`block text-sm font-medium text-gray-700`
]);

export const Textfield = (props) => {
  const { type = "text", label, name, id, placeholder } = props;
  return (
    <Container>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <div tw="mt-1 relative rounded-md shadow-sm">
        <div tw="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          tw="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        </div>
        <input
          type={type}
          name={name}
          id={id}
          tw="appearance-none focus:(ring-indigo-500 border-indigo-500) block w-full pl-10 sm:(text-sm) border-gray-300 rounded-md"
          placeholder={placeholder}
        />
      </div>
    </Container>
  );
};

export const StyledInput = styled.input(() => [
  tw`appearance-none focus:(ring-indigo-500 border-indigo-500) block w-full pl-10 sm:(text-sm) border-gray-300 rounded-md`,
]);

export const TextFieldWithStyledInput = (props) => {
  const { type = "text", label, name, id, placeholder } = props;
  return (
    <Container>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <div tw="mt-1 relative rounded-md shadow-sm">
        <div tw="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          tw="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        </div>
        <StyledInput
          type={type}
          name={name}
          error
          id={id}
          placeholder={placeholder}
        />
      </div>
    </Container>
  );
};

