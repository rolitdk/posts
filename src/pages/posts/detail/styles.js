import styled from "styled-components";

export const Image = styled.img`
  max-width: 200px;
  float: left;
  margin-right: 15px;
`;

export const Text = styled.div`
  font-size: 15px;
`;

export const LinkWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  background: white;
  color: black;
  padding: 5px 15px;

  &:hover {
    background: darkred;
    color: white;
    border: 1px solid darkred;
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Modal = styled.div`
  color: black;
  padding: 15px;
  border: 1px solid white;
  border-radius: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ModalText = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const ModalContent = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
