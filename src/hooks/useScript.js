import { useEffect } from 'react';

// Taken from:
// https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx
const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.type = "text/javascript";
    script.src = url;
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    }
  }, [url]);
};

export default useScript;