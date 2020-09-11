import AsyncStorage from '@react-native-community/async-storage';
import {User, Address} from '../types';

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

  static async saveAddress(address: Address) {
    const addresses = await this.getAllAddresses();
    addresses.unshift(address);
    return this.saveAddresses(addresses);
  }

  static async patchAddress<T>(addressId: string, update: T) {
    let addresses = await this.getAllAddresses();
    addresses = addresses.map((addr) => {
      if (addr.id === addressId) {
        return {...addr, ...update};
      }
      return addr;
    });
    return this.saveAddresses(addresses);
  }

  static async getAllAddresses(): Promise<Array<Address>> {
    try {
      const addresses = await AsyncStorage.getItem('addresses');
      return addresses !== null ? JSON.parse(addresses) : null;
    } catch (error) {
      return [];
    }
  }

  static async saveAddresses(addresses: Array<Address>) {
    return AsyncStorage.setItem('addresses', JSON.stringify(addresses));
  }

  static async removeAddress(addressId: string) {
    let addresses = await this.getAllAddresses();
    addresses = addresses.filter((address) => address.id !== addressId);
    return this.saveAddresses(addresses);
  }
}
