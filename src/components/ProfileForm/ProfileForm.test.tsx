import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ProfileForm from "./ProfileForm";

describe("ProfileForm", () => {
  it("Deve renderizar 2 inputs e 2 labels", () => {
    render(<ProfileForm />);

    const nameLabel = screen.getByText("Nome:", {
      selector: "label",
    });
    expect(nameLabel).toBeVisible();

    const surnameLabel = screen.getByText("Sobrenome:", {
      selector: "label",
    });
    expect(surnameLabel).toBeVisible();

    const nameInput = screen.getByLabelText("Nome", {
      selector: "input",
    });
    expect(nameInput).toBeVisible();

    const surnameInput = screen.getByLabelText("Sobrenome", {
      selector: "input",
    });
    expect(surnameInput).toBeVisible();
  });

  it("Quando o usuario não preencher os 2 campos clicar no botão adicionar Não deve aparecer a mensagem de sucesso", () => {
    render(<ProfileForm />);

    const nameInput = screen.getByLabelText("Nome", {
      selector: "input",
    });

    fireEvent.change(nameInput, {
      target: { value: "Teste" },
    });

    const button = screen.getByRole("button");

    fireEvent.click(button);

    const successMessage = screen.queryByRole("alert");

    expect(successMessage).toBeNull();
  });

  it("Quando o usuario preencher os 2 campos e clicar no botão adicionar Deve aparecer a mensagem de sucesso", () => {
    render(<ProfileForm />);

    const nameInput = screen.getByLabelText("Nome", {
      selector: "input",
    });

    fireEvent.change(nameInput, {
      target: { value: "Nome" },
    });

    const surnameInput = screen.getByLabelText("Sobrenome", {
      selector: "input",
    });

    fireEvent.change(surnameInput, {
      target: { value: "Sobrenome" },
    });

    const button = screen.getByRole("button");

    fireEvent.click(button);

    const successMessage = screen.queryByRole("alert");

    expect(successMessage).toBeVisible();
    expect(successMessage).toHaveTextContent(
      "Nome Sobrenome foi adicionando a base de dados"
    );
  });
});
