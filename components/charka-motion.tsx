import { motion, MotionProps } from 'framer-motion';
import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    Flex,
    FlexProps,
    Stack,
    VStack,
    HStack,
    StackProps,
    Image,
    ImageProps,
    Text,
    TextProps
} from '@chakra-ui/react';

export type MotionBoxProps = Omit<BoxProps, keyof MotionProps> & MotionProps
export const MotionBox = motion<Omit<BoxProps, keyof MotionProps> & MotionProps>(Box as any);
export type MotionFlexProps = Omit<FlexProps, keyof MotionProps> & MotionProps
export const MotionFlex = motion<Omit<FlexProps, keyof MotionProps> & MotionProps>(Flex as any);
export type MotionStackProps = Omit<StackProps, keyof MotionProps> & MotionProps
export const MotionStack = motion<Omit<StackProps, keyof MotionProps> & MotionProps>(Stack as any);
export type MotionVStackProps = Omit<StackProps, keyof MotionProps> & MotionProps
export const MotionVStack = motion<Omit<StackProps, keyof MotionProps> & MotionProps>(VStack as any);
export type MotionHStackProps = Omit<StackProps, keyof MotionProps> & MotionProps
export const MotionHStack = motion<Omit<StackProps, keyof MotionProps> & MotionProps>(HStack as any);
export type MotionButtonProps = Omit<ButtonProps, keyof MotionProps> & MotionProps
export const MotionButton = motion<Omit<ButtonProps, keyof MotionProps> & MotionProps>(Button as any);
export type MotionImageProps = Omit<ImageProps, keyof MotionProps> & MotionProps
export const MotionImage = motion<Omit<ImageProps, keyof MotionProps> & MotionProps>(Image as any);
export type MotionTextProps = Omit<TextProps, keyof MotionProps> & MotionProps
export const MotionText = motion<Omit<TextProps, keyof MotionProps> & MotionProps>(Text as any);
