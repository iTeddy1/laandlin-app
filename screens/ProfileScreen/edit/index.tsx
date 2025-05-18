import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormControlError,
  FormControlErrorText,
  Input,
  InputField,
  Heading,
  Modal as UIModal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@/components/ui'; // Adjust import path if needed
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Zod schema for profile edit form
const profileSchema = z.object({
  fullName: z.string().min(2, 'Tên đầy đủ phải có ít nhất 2 ký tự'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Số điện thoại không hợp lệ (phải có 10 chữ số)'),
});

// Zod schema for change password modal
const passwordSchema = z.object({
  currentPassword: z.string().min(6, 'Mật khẩu hiện tại phải có ít nhất 6 ký tự'),
  newPassword: z.string().min(6, 'Mật khẩu mới phải có ít nhất 6 ký tự'),
  confirmNewPassword: z.string().min(6, 'Xác nhận mật khẩu mới phải có ít nhất 6 ký tự'),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: 'Mật khẩu mới và xác nhận mật khẩu không khớp',
  path: ['confirmNewPassword'],
});

type ProfileFormData = z.infer<typeof profileSchema>;
type PasswordFormData = z.infer<typeof passwordSchema>;

const EditProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);

  const {
    handleSubmit: handleProfileSubmit,
    control: profileControl,
    formState: { errors: profileErrors, isValid: isProfileValid },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: 'Nguyễn Văn A', // Example initial value
      phone: '0901234567', // Example initial value
    },
  });

  const {
    handleSubmit: handlePasswordSubmit,
    control: passwordControl,
    formState: { errors: passwordErrors, isValid: isPasswordValid },
    reset: resetPasswordForm,
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmitProfile = (data: ProfileFormData) => {
    console.log('Profile Data Submitted:', data);
    // Implement your profile update logic here
  };

  const onSubmitPassword = (data: PasswordFormData) => {
    console.log('Password Data Submitted:', data);
    // Implement your password change logic here
    setIsPasswordModalVisible(false);
    resetPasswordForm();
  };

  const openPasswordModal = () => {
    setIsPasswordModalVisible(true);
  };

  const closePasswordModal = () => {
    setIsPasswordModalVisible(false);
    resetPasswordForm();
  };

  return (
    <View className="flex-1 bg-white p-4" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Heading size="lg" className="mb-6 text-center">
        Chỉnh sửa thông tin cá nhân
      </Heading>

      {/* Full Name Input */}
      <FormControl isInvalid={!!profileErrors.fullName} className='mb-2'>
        <FormControlLabel>Tên đầy đủ</FormControlLabel>
        <Controller
          control={profileControl}
          rules={{ required: 'Vui lòng nhập tên đầy đủ' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input>
              <InputField
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Nhập tên đầy đủ"
              />
            </Input>
          )}
          name="fullName"
        />
        {profileErrors.fullName && (
          <FormControlError>
            <FormControlErrorText>{profileErrors.fullName.message}</FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      {/* Phone Number Input */}
      <FormControl isInvalid={!!profileErrors.phone} className='mb-2'>
        <FormControlLabel>Số điện thoại</FormControlLabel>
        <Controller
          control={profileControl}
          rules={{ required: 'Vui lòng nhập số điện thoại' }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input>
              <InputField
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Nhập số điện thoại"
                keyboardType="phone-pad"
              />
            </Input>
          )}
          name="phone"
        />
        {profileErrors.phone && (
          <FormControlError>
            <FormControlErrorText>{profileErrors.phone.message}</FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      {/* Change Password Button */}
      <TouchableOpacity
        className="bg-gray-100 rounded-md py-3 items-center mb-6"
        onPress={openPasswordModal}
      >
        <Text className="text-blue-500 font-semibold">Đổi mật khẩu</Text>
      </TouchableOpacity>

      {/* Save Profile Button */}
      <Button onPress={handleProfileSubmit(onSubmitProfile)} isDisabled={!isProfileValid} className="bg-blue-500 rounded-md py-3">
        <Text className="text-white font-bold text-lg">Lưu thay đổi</Text>
      </Button>

      {/* Change Password Modal */}
      <UIModal isOpen={isPasswordModalVisible} onClose={closePasswordModal}>
        <ModalBackdrop />
        <ModalContent className="rounded-xl p-4 w-11/12 max-w-md">
          <ModalHeader>
            <Heading size="md">Đổi mật khẩu</Heading>
          </ModalHeader>
          <ModalBody>
            {/* Current Password Input */}
            <FormControl isInvalid={!!passwordErrors.currentPassword} className='mb-2'>
              <FormControlLabel>Mật khẩu hiện tại</FormControlLabel>
              <Controller
                control={passwordControl}
                rules={{ required: 'Vui lòng nhập mật khẩu hiện tại' }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input>
                    <InputField
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="Nhập mật khẩu hiện tại"
                      secureTextEntry
                    />
                  </Input>
                )}
                name="currentPassword"
              />
              {passwordErrors.currentPassword && (
                <FormControlError>
                  <FormControlErrorText>{passwordErrors.currentPassword.message}</FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            {/* New Password Input */}
            <FormControl isInvalid={!!passwordErrors.newPassword} className='mb-2'>
              <FormControlLabel>Mật khẩu mới</FormControlLabel>
              <Controller
                control={passwordControl}
                rules={{ required: 'Vui lòng nhập mật khẩu mới' }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input>
                    <InputField
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="Nhập mật khẩu mới"
                      secureTextEntry
                    />
                  </Input>
                )}
                name="newPassword"
              />
              {passwordErrors.newPassword && (
                <FormControlError>
                  <FormControlErrorText>{passwordErrors.newPassword.message}</FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            {/* Confirm New Password Input */}
            <FormControl isInvalid={!!passwordErrors.confirmNewPassword} className='mb-2'>
              <FormControlLabel>Xác nhận mật khẩu mới</FormControlLabel>
              <Controller
                control={passwordControl}
                rules={{ required: 'Vui lòng xác nhận mật khẩu mới' }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input>
                    <InputField
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      placeholder="Xác nhận mật khẩu mới"
                      secureTextEntry
                    />
                  </Input>
                )}
                name="confirmNewPassword"
              />
              {passwordErrors.confirmNewPassword && (
                <FormControlError>
                  <FormControlErrorText>{passwordErrors.confirmNewPassword.message}</FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter className="flex-row justify-end space-x-2">
            <Button variant="outline" onPress={closePasswordModal} className="rounded-md">
              <Text>Hủy</Text>
            </Button>
            <Button onPress={handlePasswordSubmit(onSubmitPassword)} isDisabled={!isPasswordValid} className="bg-blue-500 rounded-md">
              <Text className="text-white">Lưu mật khẩu</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </UIModal>
    </View>
  );
};

export default EditProfileScreen;