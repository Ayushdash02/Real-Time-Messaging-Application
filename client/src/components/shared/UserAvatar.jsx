import { Avatar } from '@mui/material';

const UserAvatar = ({ username, src }) => {
  const stringToColor = (string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  };

  return (
    <Avatar
      src={src}
      sx={{
        bgcolor: src ? undefined : stringToColor(username),
      }}
    >
      {!src && username.charAt(0).toUpperCase()}
    </Avatar>
  );
};

export default UserAvatar; 