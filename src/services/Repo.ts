import AsyncStorage from '@react-native-community/async-storage';

type User = {
  firstName: string;
  lastName: string;
  phone: string;
  id?: string;
};

export default class Repo {
  static async getUser(): Promise<User | null> {
    try {
      const user = await AsyncStorage.getItem('user');
      return user !== null ? JSON.parse(user) : null;
    } catch (error) {
      return null;
    }
  }

  static async saveUser(user: User): Promise<void> {
    return AsyncStorage.setItem('user', JSON.stringify(user));
  }

  static async wipe() {
    return AsyncStorage.clear();
  }
}
