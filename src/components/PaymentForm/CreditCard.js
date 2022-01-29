import styled from "styled-components";
import InputMask from "react-input-mask";
import Cards from "react-credit-cards";
import { useState } from "react";

export default function CreditCard({
  creditCardInfo,
  setCreditCardInfo,
}) {
  const [maskInputCreditCard, setMaskInputCardNumber] = useState(null);

  const handleInputFocusCreditCard = (e) => {
    setCreditCardInfo({ 
      ...creditCardInfo,
      focus: e.target.name,
    });
  };

  const handleInputChangeCreditCard = (e) => {
    const { name, value } = e.target;

    setCreditCardInfo({
      ...creditCardInfo,
      [name]: value,
    });
  };

  const handleChangeIssuerOfCreditCard = ({ issuer }) => {
    const masks = {
      "dinersclub": "9999 999999 9999",
      "visa": "9999 9999 9999 9999",
      "maestro": "9999 9999 9999 9999",
      "mastercard": "9999 9999 9999 9999",
      "discover": "9999 9999 9999 9999",
      "unionpay": "9999 9999 9999 9999",
      "hipercard": "9999 9999 9999 9999999"
    };

    setCreditCardInfo({
      ...creditCardInfo,
      issuer,
    });
    setMaskInputCardNumber(masks[issuer]);
  };

  return (
    <CreditCardContainer>
      <Cards
        cvc={creditCardInfo.cvc}
        expiry={creditCardInfo.expiry}
        focused={creditCardInfo.focus}
        name={creditCardInfo.name}
        number={creditCardInfo.number}
        callback={handleChangeIssuerOfCreditCard}
        locale={{ valid: "Validade" }}
        placeholders={{ name: "NOME" }}
      />
      <InputsCreditCardContainer>
        <StyledInputMask
          type="tel"
          name="number"
          placeholder="Número do Cartão"
          mask={maskInputCreditCard || "9999 9999 9999 9999"}
          onChange={handleInputChangeCreditCard}
          onFocus={handleInputFocusCreditCard}
        />
        <StyledInputMask
          type="text"
          name="name"
          placeholder="Nome"
          maxLength={20}
          onChange={handleInputChangeCreditCard}
          onFocus={handleInputFocusCreditCard}
        />
        <RowInputsCreditCard>
          <StyledInputMask
            type="tel"
            name="expiry"
            placeholder="Validade"
            mask="99/99"
            onChange={handleInputChangeCreditCard}
            onFocus={handleInputFocusCreditCard}
          />
          <StyledInputMask
            type="tel"
            name="cvc"
            placeholder="CVC"
            maxLength={4}
            onChange={handleInputChangeCreditCard}
            onFocus={handleInputFocusCreditCard}
          />
        </RowInputsCreditCard>
      </InputsCreditCardContainer>
    </CreditCardContainer>
  );
}

const StyledInputMask = styled(InputMask)`
  border-radius: 5px;
  padding-left: 15px;
  font-size: 20px;
  outline: none;
  border: solid 1px #C3C3C3;

  @media (max-width: 770px) {
    font-size: 15px;
  }
`;

const RowInputsCreditCard = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;

  input {
    width: 65%;
  }

  & > input:last-child {
    width: 30%;
  }
`;

const InputsCreditCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  padding: 5px;

  & > *:not(:last-child) {
    margin-bottom: 15px;
  }

  input {
    height: 100%;
  }

  @media (max-width: 770px) {
    margin-left: 0px;
  }
`;

const CreditCardContainer = styled.div`
  display: flex;
  max-width: 700px;

  @media (max-width: 770px) {
    flex-direction: column;
    max-width: 400px;

    & > div:last-child {
      margin-top: 20px;
    }
  }
`;
