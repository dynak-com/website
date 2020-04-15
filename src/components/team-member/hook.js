import { useState, useEffect } from 'react';
import axios from 'axios';

const [ listeners, setListeners ] = useState( [] );

const detachListeners = () =>
{
  listeners.forEach( listener => () => listener() );
};

export async function fetchGitlabAvatar ( username, setAvatarUrl )
{
  const response = await axios.get(
    `https://gitlab.com/api/v4/users?username=${ username }&size=180`
  );
  const avatarUrl = await response.data[ 0 ].avatar_url;
  setAvatarUrl( avatarUrl );
  setListeners( [ ...listeners, avatarUrl ] );
}

export const useComponent = ( username, setAvatarUrl ) =>
{
  useEffect( () =>
  {
    fetchGitlabAvatar( username, setAvatarUrl);
    return () => detachListeners();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] );
};





