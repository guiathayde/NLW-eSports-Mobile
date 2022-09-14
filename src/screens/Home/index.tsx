import React from 'react';
import { Image, View, FlatList } from 'react-native';

import { Header } from '../../components/Header';
import { GameCard } from '../../components/GameCard';

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';

import { GAMES } from '../../utils/games';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Header
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
