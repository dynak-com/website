import { useState, useEffect } from 'react';
import AbortController from 'abort-controller'

const abortController = new AbortController();

const useComponent = ( username ) =>
{
  const [ avatarURL, setAvatarUrl ] = useState( '' );
  useEffect( () =>
  {
    fetchGitlabAvatar( username, setAvatarUrl );
    return () =>
    {
      abortController.abort();
    };
  }, [ username, setAvatarUrl ] );
  return {
    avatarURL,
  };
};

function fetchGitlabAvatar ( username, setAvatarUrl )
{
  const url = `https://gitlab.com/api/v4/users?username=${ username }&size=180`;
  try
  {
    fetch( url, { method: 'get', signal: abortController.signal } )
      .then( response => response.json() )
      .then( data => setAvatarUrl( data[ 0 ].avatar_url ) );
  } catch ( error )
  {
    if ( !abortController.signal.aborted )
      console.error(error);
  }
};

export default useComponent;

