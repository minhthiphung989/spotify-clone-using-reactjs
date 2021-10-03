import React from 'react';
import { useSelector } from 'react-redux';
import PlaylistsItem from '../../components/LibraryItem/PlaylistsItem';
import useNotifier from '../../hooks/useNotifier';

const Playlists = (props) => {
  const { list, loading, error } = useSelector(({ playlists }) => playlists),
    { id: userId } = useSelector(({ auth }) => auth.user);

  const { showSnackbar } = useNotifier({
    message: 'Oooops something went wrong.',
  });

  if (!loading && error) showSnackbar();
  
  //window.location.reload();

  return (
    <>
    
      {list.map(playlist => (
        <PlaylistsItem key={playlist.id} {...playlist} userId={userId} />
      ))}
    </>
  );
};

export default Playlists;
