import React, {useContext} from 'react';
import {SectionList, View, Text} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';
interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin'],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin'],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin'],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin'],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

const SectionListScreen = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      {/* <HeaderTitle title="Section List" /> */}
      <SectionList
        sections={casas}
        renderItem={({item}) => <Text style={{color: theme.colors.text}}>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <HeaderTitle title={'Total de casas: ' + casas.length} size={21} />
        )}
        renderSectionHeader={({section}) => (
          <View>
            <HeaderTitle title={section.casa} size={20} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <Text style={{color: theme.colors.text}}>Total: {section.data.length}</Text>
        )}
        SectionSeparatorComponent={() => <ItemSeparator />}
        // ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SectionListScreen;
