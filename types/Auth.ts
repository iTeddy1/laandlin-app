export interface AuthRequest {
  email: string;
  password: string;
}

export interface GoogleAuthRequest {
  email: string;
  username: string;
  googleId: string;
}

export interface UserRequest {
  username: string;
  phone: string;
}

export interface IUserInfo {
  userId?: string;
  username: string;
  addresses: IAddress[];
  email: string;
  phone: string;
  role: "user" | "admin" | "manager";
}

export interface IAddress {
  _id: string;
  fullName: string;
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  county: string;
  address: string;
  isDefault: boolean;
}

export interface AuthResponse {
  status: string;
  userInfo: IUserInfo;
  errors: string | null;
  successMessage: string | null;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  status: string;
  userInfo: IUserInfo;
  errors: string | null;
  successMessage: string | null;
}

export interface UpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  cred: {
    password: string;
  };
}

export interface UpdateAddressRequest {
  fullName: string;
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  county: string;
  address: string;
}
