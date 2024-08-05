import React from 'react';
import { useUserProfile } from '../context/UserProfileContext';
import { Avatar, Button, Typography, Card, CardContent } from '@mui/material';

interface ProfileDisplayProps {
  onEdit: () => void;
}

const ProfileDisplay: React.FC<ProfileDisplayProps> = ({ onEdit }) => {
  const { data: userProfile, isLoading, error } = useUserProfile();
  
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile.</p>;

  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', mt: 5 }}>
      <CardContent>
        <Avatar alt="Profile Picture" src={userProfile.profilePicture} sx={{ width: 100, height: 100, margin: 'auto' }} />
        <Typography variant="h5" component="div" align="center">
          {userProfile.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {userProfile.email}
        </Typography>
        <Typography variant="body1" align="center">
          {userProfile.bio}
        </Typography>
        <Button
          variant='contained'
          color='primary'
          fullWidth
          onClick={onEdit}
          sx={{ mt: 2 }}
        >
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileDisplay;
