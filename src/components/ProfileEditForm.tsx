import React, { useState } from 'react';
import { useUserProfile } from '../context/UserProfileContext';
import { TextField, Button, Box } from '@mui/material';

interface ProfileEditFormProps {
  onSave: () => void;
}

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ onSave }) => {
  const { data: userProfile, updateUserProfile } = useUserProfile();
  const [name, setName] = useState(userProfile.name);
  const [email, setEmail] = useState(userProfile.email);
  const [bio, setBio] = useState(userProfile.bio);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile({
      name,
      email,
      bio,
      profilePicture: userProfile.profilePicture,
    });
    onSave();
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{ maxWidth: 345, margin: 'auto', mt: 5 }}
    >
      <TextField
        label='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin='normal'
        required
      />
      <TextField
        label='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin='normal'
        required
      />
      <TextField
        label='Bio'
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        fullWidth
        margin='normal'
        multiline
        rows={4}
        required
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        fullWidth
        sx={{ mt: 2 }}
      >
        Save
      </Button>
    </Box>
  );
};

export default ProfileEditForm;
