// components/SuccessModal.tsx
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  ButtonText,
  Text,
  Icon,
} from "@/components/ui";
import { CheckCircleIcon } from "lucide-react-native";
import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewBag: () => void;
  message?: string; // Optional message prop
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, onViewBag, message }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent className="rounded-lg bg-white p-4">
        <ModalBody>
          <Icon as={CheckCircleIcon} className="mb-2 text-black" />
          <Text className="text-lg font-bold">{message}</Text>
        </ModalBody>
        <ModalFooter>
          <Button onPress={onViewBag} className="w-full rounded-full bg-yellow-500">
            <ButtonText className="font-bold text-black">VIEW BAG</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SuccessModal;
