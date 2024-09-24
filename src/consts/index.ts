import { faker } from '@faker-js/faker'

const decades = [
  { from: '1950', to: '1960' },
  { from: '1961', to: '1970' },
  { from: '1971', to: '1980' },
  { from: '1981', to: '1990' },
  { from: '1991', to: '2000' },
  { from: '2001', to: '2010' },
]

export const data = decades.map(
  (decade) =>
    ({
      label: faker.lorem.word(),
      list: Array.from(
        { length: 6 },
        () =>
          ({
            id: faker.string.uuid(),
            date: faker.date.between(decade).getFullYear(),
            description: faker.lorem.sentence(),
          }) as const
      ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    }) as const
)
