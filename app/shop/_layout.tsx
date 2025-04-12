import AddToCartActionsheet from "@/components/favorites/add-to-cart-action-sheet";
import { Button, ButtonText, VStack } from "@/components/ui";
import { Stack } from "expo-router";
import { useState } from "react";

const ShopLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VStack className="flex-1 bg-white">
      <Button>
        <ButtonText>Open</ButtonText>
      </Button>
      <AddToCartActionsheet />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </VStack>
  );
};

export default ShopLayout;
