import { useState, useEffect } from 'react';
import axios from 'axios';

const useComponent = ( username ) =>
{
  const [ avatarURL, setAvatarUrl ] = useState( '' );
  useEffect( () =>
  {
    fetchGitlabAvatar( username, setAvatarUrl );
  }, [ username, setAvatarUrl ] );
  return {
    avatarURL,
  };
};

async function fetchGitlabAvatar ( username, setAvatarUrl )
{
  let result = await axios.get(
    `https://gitlab.com/api/v4/users?username=${ username }&size=180`
  );
  let { avatar_url } = await result.data[ 0 ];
  setAvatarUrl( avatar_url );
}

export default useComponent;


