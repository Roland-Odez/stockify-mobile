type ItemProps = { title: string; img: any; id: string };
type InvestProps = { title: string; img: any; id: string; comp: string };
type Item2Props = { name: string; img: any; opp: number };
type Item3Props = { name: string; img: any; linkText: string };
type ProfileType = {
  first_name: string;
  last_name: string;
  city: string;
  nationality: string;
  phone: string;
};
interface MenuLink {
  name: string;
  path?: Href;
  icon: (color: string) => React.ReactElement;
  innerLink?: { name: string; path: Href }[];
}
type PersistentData = {
  step: number;
  totalStep: number;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  sex: "Male" | "Female" | null;
  nationality: string;
  dob: Date | null;
  city: string;
  tin: string;
  phone: string;
};
