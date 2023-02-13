type CSVData = string[][];

interface IPatient {
  ssn: string;
  firstName: string;
  lastName: string;
  country: string;
  address1: string;
  address2: string;
  number1: string;
  number2: string;
  sex: string;
  DOB: string;
  DOD: string;
  email: string;
  height: string;
  weight: string;
  bloodType: string;
  educationBackground: string;
  employmentStatus: string;
  occupation: string;
}

interface IHospital {
  id: string;
  name: string;
  address: string;
  number: string;
  email: string;
}

interface IPractitioner {
  id: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  number1: string;
  number2: string;
  checkIn: string;
  checkOut: string;
}

interface INurse {
  id: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  number: string;
  checkIn: string;
  checkOut: string;
}

interface IObservation {
  id: string;
  date: string;
  time: string;
  remark: string;
  medication: {
    id: string;
    remark: string;
  };
}

export interface ITransformedData {
  patient: IPatient;
  hospital: IHospital;
  practitioner: IPractitioner;
  nurse: INurse;
  observation: IObservation;
}