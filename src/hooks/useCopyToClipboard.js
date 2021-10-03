import useNotifier from './useNotifier';

function useCopyToClipboard(text = window.location.href) {
  const { showSnackbar } = useNotifier({
    error: false,
    message: 'copy to clipboard',
  });
  const copyToClipboard = () => {
    if (navigator.clipboard.writeText(text, '')) showSnackbar();
  };

  return { copyToClipboard };
}

export default useCopyToClipboard;
