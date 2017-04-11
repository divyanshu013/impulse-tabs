import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

const recentsIcon = <FontIcon className="material-icons">home</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

let selectedIndex = 0;
const select = (index) => {
  selectedIndex = index;
  console.log('selected', index);
};

const TodoFooter = () => (
  <BottomNavigation selectedIndex={selectedIndex}>
    <BottomNavigationItem
      label="Recents"
      icon={recentsIcon}
      onTouchTap={() => select(0)}
    />
    <BottomNavigationItem
      label="Favorites"
      icon={favoritesIcon}
      onTouchTap={() => select(1)}
    />
  </BottomNavigation>
);

export default TodoFooter;
