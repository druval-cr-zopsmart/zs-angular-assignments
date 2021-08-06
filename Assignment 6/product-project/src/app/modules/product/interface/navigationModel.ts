interface NavigationModel {
  title: string;
  url?: string;
  children: NavigationModel[];
}

export default NavigationModel;