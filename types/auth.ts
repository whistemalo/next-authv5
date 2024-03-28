// this are a types for user and auth
// User type
export type UserAuth = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    company_role: string;
    has_shift_active: boolean;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    id_role: number;
    token: Token;
  };
  
  // Token type
  type Token = string;
  
  // ShiftInfo type
  type ShiftInfo = null;
  
  // Main data type
  export type AuthData = {
    user: UserAuth;
    token: Token;
    shift_info: ShiftInfo;
  };