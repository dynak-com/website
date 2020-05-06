import { useState, useEffect } from 'react';
import AbortController from 'abort-controller';

const useComponent = (username) => {
    const [avatarURL, setAvatarUrl] = useState('');
    useEffect(() => {
        const abortController = new AbortController();
        fetchGitlabAvatar(username, setAvatarUrl, abortController.signal);
        return () => {
            abortController.abort();
        };
    }, [username, setAvatarUrl]);
    return {
        avatarURL,
    };
};

async function fetchGitlabAvatar(username, setAvatarUrl, controllerSignal) {
    try {
        const url = `https://gitlab.com/api/v4/users?username=${username}&size=180`;
        let result = await fetch(url, { method: 'get', signal: controllerSignal }).then((response) => response.json());
        const { avatar_url } = await result[0];
        setAvatarUrl(avatar_url);
    } catch (error) {
        if (!controllerSignal.aborted) console.error(error);
    }
}

export default useComponent;
