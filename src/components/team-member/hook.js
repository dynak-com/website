import { useState, useEffect } from 'react';
import AbortController from 'abort-controller';

const useComponent = (username) => {
  const [avatarURL, setAvatarUrl] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    fetchGitlabAvatar(username, setAvatarUrl, controller.signal);
    return () => controller.abort();
  }, [username, setAvatarUrl]);
  return {
    avatarURL,
  };
};

async function fetchGitlabAvatar(username, setAvatarUrl, signal) {
  try {
    const url = `https://gitlab.com/api/v4/users?username=${username}&size=180`;
    let result = await fetch(url, { method: 'get', signal }).then((response) =>
      response.json()
    );
    const { avatar_url } = await result[0];
    setAvatarUrl(avatar_url);
  } catch (error) {
    console.log(error.message);
  }
}

export default useComponent;
