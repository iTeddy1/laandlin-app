import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from "react-native";
import {
  Heading,
  Button,
  ButtonText,
  Icon,
  Select,
  SelectTrigger,
  SelectInput,
  SelectItem,
  SelectIcon,
  ChevronDownIcon,
  SelectContent,
  VStack,
} from "@/components/ui"; // Import từ Gluestack UI
import { Heart, Share2 } from "lucide-react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { sampleProducts } from "@/data/product";
import { formatCurrency } from "@/libs/functions";
import { useLocalSearchParams } from "expo-router";
import { WINDOW_WIDTH } from "@/shared/constants/window";
import ProductDetailsScreen from "@/screens/ShopScreen/[slug]";

const Index = () => {
  const { slug } = useLocalSearchParams();
  const product = sampleProducts.find((item) => item.slug === slug) || sampleProducts[1];
  return <ProductDetailsScreen product={product} />;
};

export default Index;
