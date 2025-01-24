export interface HousingInfoProps {
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: number;
  isPetFriendly: boolean;
}export type RootStackParamList = {
  Onboarding: undefined;
  TenantProfile: undefined;
  LandlordProfileForm: undefined;
  PropertyDetailsForm: undefined;
  MainLayout: {
    profileData: {
      name: string;
      age: number;
      profession: string;
      attributes: {
        imageUri: string;
        text: string;
      }[];
    };
  };
  HousingInfo: {
    price: string;
    location: string;
    beds: number;
    baths: number;
    area: number;
    isPetFriendly: boolean;
  };
  SomeDetailScreen: {
    price: string;
    location: string;
    beds: number;
    baths: number;
    area: number;
    isPetFriendly: boolean;
  };
};

