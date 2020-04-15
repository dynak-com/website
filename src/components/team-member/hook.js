import { useState, useEffect } from 'react';
import axios from 'axios';

const useComponent = (username) => {
  const [avatarURL, setAvatarUrl] = useState('');
  useEffect(() => {
    fetchGitlabAvatar(username, setAvatarUrl);
  }, [username, setAvatarUrl]);
  return {
    avatarURL,
  };
};

async function fetchGitlabAvatar(username, setAvatarUrl) {
  const response = await axios.get(
    `https://gitlab.com/api/v4/users?username=${username}&size=180`
  );
  const json = await response.data[0];
  setAvatarUrl(json.avatar_url);
}

export default useComponent;
