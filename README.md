# The Daily Commit

**Who actually shows up for you on GitHub?** Type a username and get a newspaper front page:
followers against the people who really review, comment and commit with you, a box-score
standings table, and a share picture for X.

Made by [Kushagra Srivastava](https://portfolio3-kappa-rosy.vercel.app) ([@marvillage](https://github.com/marvillage)).

## How it works

- Three GitHub GraphQL queries per new edition (PRs, issues, comments, reviews, commits), cached 12 hours.
- Points: review 3, PR 3, comment 2, issue 2, commit 1 (max 15), +5 both ways, +2 mutual follow. Bots and follows alone don't score.
- Share pictures are drawn on the edge with `next/og`: a 1200x630 link card and a 1200x1600 full page.
- Page views and edition numbers live in Upstash Redis (free tier).

## Run it

```bash
npm install
cp .env.example .env.local   # add a GITHUB_TOKEN with no scopes
npm run dev
```

Public GitHub data only. Each visitor can print 12 new editions per 10 minutes, and the whole site 600 per hour.
