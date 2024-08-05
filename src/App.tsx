import React, { useState } from 'react';
import ProfileDisplay from './components/ProfileDisplay';
import ProfileEditForm from './components/ProfileEditForm';
import { UserProfileProvider } from './context/UserProfileContext';
import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});


const App: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  return (
    <QueryClientProvider client={queryClient}>
      <UserProfileProvider>
        <div className='App'>
          {isEditing ? (
            <ProfileEditForm onSave={handleSave} />
          ) : (
            <ProfileDisplay onEdit={handleEdit} />
          )}
        </div>
      </UserProfileProvider>
    </QueryClientProvider>
  );
};

export default App;
