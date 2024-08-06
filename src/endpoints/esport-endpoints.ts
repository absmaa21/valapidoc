import {EndpointRoute, HttpMethod} from "../types.ts";
import {defaultHeaders} from "./defaults.ts";

export const EsportEndpoints: EndpointRoute[] = [
    {
        route: {
            path: "esport-schedules",
            title: "Schedules",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/esports-service/v1/schedules?locale={locale}&sport={sport}",
            title: "Schedules",
            httpMethod: HttpMethod.GET,
            description: "Retrieve schedules for the current esports event.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{locale}",
                    description: "Determines the languages for some returned values. (e.g. en-US)",
                },
                {
                    title: "{sport}",
                    description: "Determines the game with val as default. (e.g. val)",
                    optional: true,
                },
            ],
            response: "{\n" +
                "    EventScheduleList: {\n" +
                "        LeagueID: string\n" +
                "        LeagueName: string\n" +
                "        LeagueSlug: string\n" +
                "        TournamentID: string\n" +
                "        TournamentName: string\n" +
                "        TournamentSlug: string\n" +
                "        TournamentState: string\n" +
                "        StartTime: string\n" +
                "        EndTime: string\n" +
                "        Matches: {\n" +
                "            ID: string\n" +
                "            StartTime: string\n" +
                "            StageName: string\n" +
                "            StageSlug: string\n" +
                "            Stage: string\n" +
                "            Status: string\n" +
                "            StructuralID: string\n" +
                "            Destinations: {\n" +
                "                Win: {\n" +
                "                    StructuralID: string\n" +
                "                    Type: string\n" +
                "                    Slot: number\n" +
                "                }\n" +
                "                Loss: {\n" +
                "                    StructuralID: string\n" +
                "                    Type: string\n" +
                "                    Slot: number\n" +
                "                }\n" +
                "            }\n" +
                "            Teams: {\n" +
                "                ID: string\n" +
                "                Name: string\n" +
                "                Code: string\n" +
                "                CodeSanitized: string\n" +
                "                ImageURL: string\n" +
                "                ImageLowResURL: string\n" +
                "                ImageHighResURL: string\n" +
                "                AlternativeImageURL: string\n" +
                "                BackgroundImageURL: string\n" +
                "                PrimaryColor: string\n" +
                "                SecondaryColor: string\n" +
                "                MatchOutcome: {\n" +
                "                    MatchID: string\n" +
                "                    TeamID: string\n" +
                "                    Outcome: string\n" +
                "                    GameWins: number\n" +
                "                }\n" +
                "                Origin: {\n" +
                "                    StructuralID: string\n" +
                "                    Type: string\n" +
                "                    Slot: number\n" +
                "                }\n" +
                "                Players: any\n" +
                "                Record: {\n" +
                "                    Wins: number\n" +
                "                    Losses: number\n" +
                "                    Ties: number\n" +
                "                }\n" +
                "                HomeLeague: {\n" +
                "                    ID: string\n" +
                "                    Name: string\n" +
                "                    ImageURL: string\n" +
                "                    Region: string\n" +
                "                }\n" +
                "                BundleID: string\n" +
                "            }[]\n" +
                "            Games: {\n" +
                "                ID: string\n" +
                "                Number: number\n" +
                "                VODs: {\n" +
                "                    ID: string\n" +
                "                    Locale: string\n" +
                "                    ProviderURL: string\n" +
                "                }[]\n" +
                "            }[]\n" +
                "            Streams?: {\n" +
                "                ID: string\n" +
                "                Locale: string\n" +
                "                ProviderURL: string\n" +
                "                MediaLocale: {\n" +
                "                    Locale: string\n" +
                "                    EnglishName: string\n" +
                "                    TranslatedName: string\n" +
                "                }\n" +
                "            }[]\n" +
                "        }[]\n" +
                "    }[]\n" +
                "}",
        }
    }, // Schedule
    {
        route: {
            path: "esport-events",
            title: "Events",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/esports-service/v1/combined?locale={locale}&sport={sport}",
            title: "Events",
            httpMethod: HttpMethod.GET,
            description: "Retrieve everything for the current VCT Season.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{locale}",
                    description: "Determines the languages for some returned values. (e.g. en-US)",
                },
                {
                    title: "{sport}",
                    description: "Determines the game with val as default. (e.g. val)",
                    optional: true,
                },
            ],
            response: "{\n" +
                "    Data: {\n" +
                "        Events: {\n" +
                "            LeagueID: string\n" +
                "            LeagueName: string\n" +
                "            LeagueSlug: string\n" +
                "            TournamentID: string\n" +
                "            TournamentName: string\n" +
                "            TournamentSlug: string\n" +
                "            TournamentState: string\n" +
                "            StartTime: string\n" +
                "            EndTime: string\n" +
                "            Matches: {\n" +
                "                ID: string\n" +
                "                StartTime: string\n" +
                "                StageName: string\n" +
                "                StageSlug: string\n" +
                "                Stage: string\n" +
                "                Status: string\n" +
                "                StructuralID: string\n" +
                "                Destinations: {\n" +
                "                    Win: {\n" +
                "                        StructuralID: string\n" +
                "                        Type: string\n" +
                "                        Slot: number\n" +
                "                    }\n" +
                "                    Loss: {\n" +
                "                        StructuralID: string\n" +
                "                        Type: string\n" +
                "                        Slot: number\n" +
                "                    }\n" +
                "                }\n" +
                "                Teams: {\n" +
                "                    ID: string\n" +
                "                    Name: string\n" +
                "                    Code: string\n" +
                "                    CodeSanitized: string\n" +
                "                    ImageURL: string\n" +
                "                    ImageLowResURL: string\n" +
                "                    ImageHighResURL: string\n" +
                "                    AlternativeImageURL: string\n" +
                "                    BackgroundImageURL: string\n" +
                "                    PrimaryColor: string\n" +
                "                    SecondaryColor: string\n" +
                "                    MatchOutcome: {\n" +
                "                        MatchID: string\n" +
                "                        TeamID: string\n" +
                "                        Outcome: string\n" +
                "                        GameWins: number\n" +
                "                    }\n" +
                "                    Origin: {\n" +
                "                        StructuralID: string\n" +
                "                        Type: string\n" +
                "                        Slot: number\n" +
                "                    }\n" +
                "                    Players: any\n" +
                "                    Record: {\n" +
                "                        Wins: number\n" +
                "                        Losses: number\n" +
                "                        Ties: number\n" +
                "                    }\n" +
                "                    HomeLeague: {\n" +
                "                        ID: string\n" +
                "                        Name: string\n" +
                "                        ImageURL: string\n" +
                "                        Region: string\n" +
                "                    }\n" +
                "                    BundleID: string\n" +
                "                }[]\n" +
                "                Games: {\n" +
                "                    ID: string\n" +
                "                    Number: number\n" +
                "                    VODs: {\n" +
                "                        ID: string\n" +
                "                        Locale: string\n" +
                "                        ProviderURL: string\n" +
                "                    }[]\n" +
                "                }[]\n" +
                "                Streams: any\n" +
                "            }[]\n" +
                "        }\n" +
                "        Standings: {\n" +
                "            ID: string\n" +
                "            Name: string\n" +
                "            StartTime: string\n" +
                "            EndTime: string\n" +
                "            TournamentSections: any\n" +
                "            TournamentSectionsV2: {\n" +
                "                playoffs: EsportEventStage\n" +
                "                swiss?: EsportEventStage\n" +
                "                group_a?: EsportEventStage\n" +
                "                group_b?: EsportEventStage\n" +
                "                group_c?: EsportEventStage\n" +
                "                play_in_groups?: EsportEventStage\n" +
                "                group_d?: EsportEventStage\n" +
                "            }\n" +
                "        }\n" +
                "        Teams: {\n" +
                "            Teams: {\n" +
                "                ID: string\n" +
                "                Name: string\n" +
                "                Code: string\n" +
                "                CodeSanitized: string\n" +
                "                ImageURL: string\n" +
                "                ImageLowResURL: string\n" +
                "                ImageHighResURL: string\n" +
                "                AlternativeImageURL: string\n" +
                "                BackgroundImageURL: string\n" +
                "                PrimaryColor: string\n" +
                "                SecondaryColor: string\n" +
                "                MatchOutcome: {\n" +
                "                    MatchID: string\n" +
                "                    TeamID: string\n" +
                "                    Outcome: string\n" +
                "                    GameWins: number\n" +
                "                }\n" +
                "                Origin: {\n" +
                "                    StructuralID: string\n" +
                "                    Type: string\n" +
                "                    Slot: number\n" +
                "                }\n" +
                "                Players: {\n" +
                "                    ID: string\n" +
                "                    SummonerName: string\n" +
                "                    Handle: string\n" +
                "                    FirstName: string\n" +
                "                    LastName: string\n" +
                "                    Image: string\n" +
                "                    Status: string\n" +
                "                    Roles: {\n" +
                "                        Type: string\n" +
                "                        Name: string\n" +
                "                    }[]\n" +
                "                }[]\n" +
                "                Record: {\n" +
                "                    Wins: number\n" +
                "                    Losses: number\n" +
                "                    Ties: number\n" +
                "                }\n" +
                "                HomeLeague: {\n" +
                "                    ID: string\n" +
                "                    Name: string\n" +
                "                    ImageURL: string\n" +
                "                    Region: string\n" +
                "                }\n" +
                "                BundleID: string\n" +
                "            }[]\n" +
                "        }\n" +
                "    }[]\n" +
                "}\n" +
                "\n" +
                "type EsportEventStage = {\n" +
                "    ID: string\n" +
                "    StageIndex: number\n" +
                "    SectionIndex: number\n" +
                "    LeagueID: string\n" +
                "    Name: string\n" +
                "    StageName: string\n" +
                "    StageSlug: string\n" +
                "    Matches: {\n" +
                "        ID: string\n" +
                "        StartTime: string\n" +
                "        StageName: string\n" +
                "        StageSlug: string\n" +
                "        Stage: string\n" +
                "        Status: string\n" +
                "        StructuralID: string\n" +
                "        Destinations: {\n" +
                "            Win: {\n" +
                "                StructuralID: string\n" +
                "                Type: string\n" +
                "                Slot: number\n" +
                "            }\n" +
                "            Loss: {\n" +
                "                StructuralID: string\n" +
                "                Type: string\n" +
                "                Slot: number\n" +
                "            }\n" +
                "        }\n" +
                "        Teams: {\n" +
                "            ID: string\n" +
                "            Name: string\n" +
                "            Code: string\n" +
                "            CodeSanitized: string\n" +
                "            ImageURL: string\n" +
                "            ImageLowResURL: string\n" +
                "            ImageHighResURL: string\n" +
                "            AlternativeImageURL: string\n" +
                "            BackgroundImageURL: string\n" +
                "            PrimaryColor: string\n" +
                "            SecondaryColor: string\n" +
                "            MatchOutcome: {\n" +
                "                MatchID: string\n" +
                "                TeamID: string\n" +
                "                Outcome: string\n" +
                "                GameWins: number\n" +
                "            }\n" +
                "            Origin: {\n" +
                "                StructuralID: string\n" +
                "                Type: string\n" +
                "                Slot: number\n" +
                "            }\n" +
                "            Players: {\n" +
                "                ID: string\n" +
                "                SummonerName: string\n" +
                "                Handle: string\n" +
                "                FirstName: string\n" +
                "                LastName: string\n" +
                "                Image: string\n" +
                "                Status: string\n" +
                "                Roles: {\n" +
                "                    Type: string\n" +
                "                    Name: string\n" +
                "                }[]\n" +
                "            }[]\n" +
                "            Record: {\n" +
                "                Wins: number\n" +
                "                Losses: number\n" +
                "                Ties: number\n" +
                "            }\n" +
                "            HomeLeague: {\n" +
                "                ID: string\n" +
                "                Name: string\n" +
                "                ImageURL: string\n" +
                "                Region: string\n" +
                "            }\n" +
                "            BundleID: string\n" +
                "        }[]\n" +
                "        Games: any\n" +
                "        Streams: any\n" +
                "    }[]\n" +
                "    Type: string\n" +
                "    Standing: {\n" +
                "        Group?: {\n" +
                "            ID: string\n" +
                "            Name: string\n" +
                "            Rankings: {\n" +
                "                Rank: number\n" +
                "                Teams: {\n" +
                "                    ID: string\n" +
                "                    Name: string\n" +
                "                    Code: string\n" +
                "                    CodeSanitized: string\n" +
                "                    ImageURL: string\n" +
                "                    ImageLowResURL: string\n" +
                "                    ImageHighResURL: string\n" +
                "                    AlternativeImageURL: string\n" +
                "                    BackgroundImageURL: string\n" +
                "                    PrimaryColor: string\n" +
                "                    SecondaryColor: string\n" +
                "                    MatchOutcome: {\n" +
                "                        MatchID: string\n" +
                "                        TeamID: string\n" +
                "                        Outcome: string\n" +
                "                        GameWins: number\n" +
                "                    }\n" +
                "                    Origin: {\n" +
                "                        StructuralID: string\n" +
                "                        Type: string\n" +
                "                        Slot: number\n" +
                "                    }\n" +
                "                    Players: any\n" +
                "                    Record: {\n" +
                "                        Wins: number\n" +
                "                        Losses: number\n" +
                "                        Ties: number\n" +
                "                    }\n" +
                "                    HomeLeague: {\n" +
                "                        ID: string\n" +
                "                        Name: string\n" +
                "                        ImageURL: string\n" +
                "                        Region: string\n" +
                "                    }\n" +
                "                    BundleID: string\n" +
                "                }[]\n" +
                "            }[]\n" +
                "        }\n" +
                "        Bracket?: {\n" +
                "            Columns: {\n" +
                "                Cells: {\n" +
                "                    Stage: string\n" +
                "                    Type: string\n" +
                "                    RoundNumber: number\n" +
                "                    MatchIDs: string[]\n" +
                "                }[]\n" +
                "            }[]\n" +
                "        }\n" +
                "    }\n" +
                "}",
        }
    }, // Events
    {
        route: {
            path: "esport-pickem-leagues",
            title: "Pickem Leagues",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/esports-service/v1/pickem/leagues",
            title: "Pickem Leagues",
            httpMethod: HttpMethod.GET,
            description: "Retrieve the current pick'ems.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
            ],
            response: "{\n" +
                "    PickemLeagues: {\n" +
                "        LeagueID: string\n" +
                "        EldsLeagueID: string\n" +
                "        Tournament: {\n" +
                "            ID: string\n" +
                "            EldsTournamentID: string\n" +
                "            LeagueID: string\n" +
                "            PickBlocks: {\n" +
                "                ID: string\n" +
                "                EldsTournamentID: string\n" +
                "                Slug: {\n" +
                "                    Slug: string\n" +
                "                    Localizations: any\n" +
                "                }\n" +
                "                PickOpenTime: string\n" +
                "                PickCloseTime: string\n" +
                "                State: string\n" +
                "                OpenLevel: string\n" +
                "                BlockType: string\n" +
                "                PickBlockElements: {\n" +
                "                    ID: string\n" +
                "                    PickBlockID: string\n" +
                "                    Section: {\n" +
                "                        ID: string\n" +
                "                        EldsSectionID: string\n" +
                "                        CorrectPick: {\n" +
                "                            Entries: any\n" +
                "                        }\n" +
                "                    }\n" +
                "                    Match: {\n" +
                "                        ID: string\n" +
                "                        EldsMatchID: string\n" +
                "                        BaselinePoints: number\n" +
                "                        CorrectPick: string\n" +
                "                        ResultState: string\n" +
                "                    }\n" +
                "                    PickOpenTime: string\n" +
                "                    PickCloseTime: string\n" +
                "                    State: string\n" +
                "                    DisplayOrder: number\n" +
                "                }[]\n" +
                "                CompletionStatus: string\n" +
                "            }[]\n" +
                "            Participants: {\n" +
                "                ID: string\n" +
                "                EldsTeamID: string\n" +
                "            }[]\n" +
                "        }\n" +
                "        Published: boolean\n" +
                "    }[]\n" +
                "}",
        }
    }, // Pickem Leagues
    {
        route: {
            path: "esport-pickem-rewards",
            title: "Pickem Rewards",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/esports-service/v1/pickem/rewards",
            title: "Pickem Rewards",
            httpMethod: HttpMethod.GET,
            description: "Retrieve the current pick'ems rewards.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
            ],
            response: "{\n" +
                "    Rewards: {\n" +
                "        ItemID: string\n" +
                "        ItemTypeID: string\n" +
                "    }[]\n" +
                "}",
        }
    }, // Pickem Rewards
    {
        route: {
            path: "esport-pickem-leaderboard",
            title: "Pickem Leaderboard",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/esports-service/v1/pickem/celeb-leaderboard/{tournament_id}",
            title: "Pickem Leaderboard",
            httpMethod: HttpMethod.GET,
            description: "Retrieve the current pick'ems leaderboard.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{tournament_id}",
                    description: "Tournament Id of pickem leaderboard. Retrieved through Events and Pickem Leagues endpoints. (e.g. 112053452805788444 -> Champions 2024 Seoul)",
                },
            ],
            response: "{\n" +
                "    Standings: {\n" +
                "        Rank: number\n" +
                "        Name: string\n" +
                "        ID: string\n" +
                "        Points: number\n" +
                "    }[]\n" +
                "}",
        }
    }, // Pickem Leaderboard
    {
        route: {
            path: "esport-pickem-section",
            title: "Pickem Section",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/esports-service/v1/pickem/section-picks/{pickblock_id}",
            title: "Pickem Section",
            httpMethod: HttpMethod.GET,
            description: "Retrieve the current group stage pick'ems of the authorized user.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{pickblock_id}",
                    description: "Pickblock Id of the group stage pick'ems. Retrieved through Pickem Leagues endpoint. (e.g. 1951666622333961449 -> Champions 2024 Seoul Group Stage)",
                },
            ],
            response: "{\n" +
                "    PickBlockID: string\n" +
                "    SectionPicks: {\n" +
                "        EldsSectionID: string\n" +
                "        Lineup: {\n" +
                "            Entries: {\n" +
                "                Index: number\n" +
                "                Correctness: string\n" +
                "                ParticipantID: string\n" +
                "                Points: number\n" +
                "                Rank: number\n" +
                "            }[]\n" +
                "        }\n" +
                "        PickType: string\n" +
                "        Result: {\n" +
                "            Correctness: string\n" +
                "            TotalAwardedPoints: number\n" +
                "            TotalPossiblePoints: number\n" +
                "            PerfectPickPoints: number\n" +
                "            Entries: {\n" +
                "                Index: number\n" +
                "                Correctness: string\n" +
                "                ParticipantID: string\n" +
                "                Points: number\n" +
                "                Rank: number\n" +
                "            }[]\n" +
                "        }\n" +
                "    }[] | null\n" +
                "}",
        }
    }, // Pickem Section
    {
        route: {
            path: "esport-pickem-bracket",
            title: "Pickem Bracket",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/esports-service/v1/pickem/bracket-picks/{pickblock_id}",
            title: "Pickem Bracket",
            httpMethod: HttpMethod.GET,
            description: "Retrieve the current playoffs pick'ems of the authorized user.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{pickblock_id}",
                    description: "Pickblock Id of the playoffs pick'ems. Retrieved through Pickem Leagues endpoint. (e.g. 7030074582950656809 -> Champions 2024 Seoul Playoffs)",
                },
            ],
            response: "{\n" +
                "    PickBlockID: string\n" +
                "    PlayerName: string\n" +
                "    Picks: unknown | null\n" +
                "    MatchPicks: unknown[]\n" +
                "    Score: number\n" +
                "}",
        }
    }, // Pickem Playoffs
    {
        route: {
            path: "esport-pickem-player-stats",
            title: "Pickem Player Stats",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/esports-service/v1/pickem/player-stats/{tournament_id}",
            title: "Pickem Player Stats",
            httpMethod: HttpMethod.GET,
            description: "Retrieve the pick'em stats of the authorized user.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{tournament_id}",
                    description: "Tournament Id of pickem stats. Retrieved through Events and Pickem Leagues endpoints. (e.g. 112053452805788444 -> Champions 2024 Seoul)",
                },
            ],
            response: "{\n" +
                "  Rank: number\n" +
                "  Points: number\n" +
                "  PercentRank: number\n" +
                "  CorrectPicks: number\n" +
                "  PerfectBlocks: number\n" +
                "  PlayerName: string\n" +
                "}\n",
        }
    }, // Pickem Player Stats
]
