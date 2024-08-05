import { createContext, ReactNode, useContext, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

interface UserProfile {
  name: string;
  email: string;
  bio: string;
  profilePicture: string;
}

const UserProfileContext = createContext<any>(null);

export const UserProfileProvider = ({ children }: { children: ReactNode }) => {
  const [localUserData, setLocalUserData] = useState<UserProfile>();
  const { data, error, isLoading } = useQuery('userProfile', async () => {
    const response = await axios.get('/user');
    return response.data;
  });

  const updateUserProfile = (userProfileData: UserProfile) => {
    setLocalUserData(userProfileData);
  };

  return (
    <UserProfileContext.Provider
      value={{
        data: localUserData || data,
        error,
        isLoading,
        updateUserProfile,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => useContext(UserProfileContext);
