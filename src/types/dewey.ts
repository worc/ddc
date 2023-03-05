type MainClassCode =
  | '000'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

type MainClassName =
  | 'Computer science, information and general works'
  | 'Philosophy and psychology'
  | 'Religion'
  | 'Social sciences'
  | 'Language'
  | 'Pure science'
  | 'Technology'
  | 'Arts and recreation'
  | 'Literature'
  | 'History and geography'

interface DeweyClass {
  code: string
  name: string
  subclasses?: DeweyClass[]
  inactive?: boolean
}

export interface Section extends DeweyClass {
  code: string
  name: string
}

export interface Division extends DeweyClass {
  code: string
  name: string
  subclasses?: Section[]
}

export interface MainClass extends DeweyClass {
  code: MainClassCode
  name: MainClassName
  subclasses?: Division[]
}


