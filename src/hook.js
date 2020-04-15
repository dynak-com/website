import { useState, useEffect } from 'react';
import axios from 'axios';

const useComponent = () => {
  const [lang, onSetLang] = useState('pl');
  return {
    lang,
    onSetLang,
  };
};

export default useComponent;

export const useEffectHook = (username) =>
{
  const [ avatarURL, setAvatarUrl ] = useState( '' );

    useEffect(() => {
      fetchGitlabAvatar( username ).then((response) =>
    {
        if ( response )
      {
        const responseData = response.data[ 0 ].avatar_url;
        setAvatarUrl( responseData)
      }
    } );
  }, [username]);

    return avatarURL;
};

const fetchGitlabAvatar = async ( username ) => await axios.get( `https://gitlab.com/api/v4/users?username=${ username }&s=180` );