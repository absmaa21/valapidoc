import {EndpointRoute, HttpMethod} from "../types.ts";
import {defaultHeaders} from "./defaults.ts";

export const PvpEndpoints: EndpointRoute[] = [
    {
        route: {
            path: "fetch-content",
            title: "Fetch Content",
        },
        endpoint: {
            url: "https://shared.{shard}.a.pvp.net/content-service/v3/content",
            title: "Fetch Content",
            httpMethod: HttpMethod.GET,
            description: "Retrieve a list of seasons, acts, episodes and events",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
            ],
            response: "{\n" +
                "    DisabledIDs: unknown[];\n" +
                "    Seasons: {\n" +
                "        /** UUID */\n" +
                "        ID: string;\n" +
                "        Name: string;\n" +
                "        Type: \"episode\" | \"act\";\n" +
                "        /** Date in ISO 8601 format */\n" +
                "        StartTime: string;\n" +
                "        /** Date in ISO 8601 format */\n" +
                "        EndTime: string;\n" +
                "        IsActive: boolean;\n" +
                "    }[];\n" +
                "    Events: {\n" +
                "        /** UUID */\n" +
                "        ID: string;\n" +
                "        Name: string;\n" +
                "        /** Date in ISO 8601 format */\n" +
                "        StartTime: string;\n" +
                "        /** Date in ISO 8601 format */\n" +
                "        EndTime: string;\n" +
                "        IsActive: boolean;\n" +
                "    }[];\n" +
                "}",
        }
    }, // Fetch Content
    {
        route: {
            path: "account-xp",
            title: "Account XP",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/account-xp/v1/players/{puuid}",
            title: "Account XP",
            httpMethod: HttpMethod.GET,
            description: "Retrieve the Account level, xp and the latest xp changes for the current player.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{puuid}",
                    description: "A players UUID.",
                },
            ],
            response: "{\n" +
                "    Version: number;\n" +
                "    /** Player UUID */\n" +
                "    Subject: string;\n" +
                "    Progress: {\n" +
                "        Level: number;\n" +
                "        XP: number;\n" +
                "    };\n" +
                "    History: {\n" +
                "        /** Match ID */\n" +
                "        ID: string;\n" +
                "        /** Date in ISO 8601 format */\n" +
                "        MatchStart: string;\n" +
                "        StartProgress: {\n" +
                "            Level: number;\n" +
                "            XP: number;\n" +
                "        };\n" +
                "        EndProgress: {\n" +
                "            Level: number;\n" +
                "            XP: number;\n" +
                "        };\n" +
                "        XPDelta: number;\n" +
                "        XPSources: {\n" +
                "            ID: \"time-played\" | \"match-win\" | \"first-win-of-the-day\";\n" +
                "            Amount: number;\n" +
                "        }[];\n" +
                "        XPMultipliers: unknown[];\n" +
                "    }[];\n" +
                "    /** Date in ISO 8601 format */\n" +
                "    LastTimeGrantedFirstWin: string;\n" +
                "    /** Date in ISO 8601 format */\n" +
                "    NextTimeFirstWinAvailable: string;\n" +
                "};",
        }
    }, // Account XP
    {
        route: {
            path: "player-loadout",
            title: "Player Loadout",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/personalization/v2/players/{puuid}/playerloadout",
            title: "Player Loadout",
            httpMethod: HttpMethod.GET,
            description: "Retrieve the players current loadout. Only works with authenticated user.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{puuid}",
                    description: "A players UUID.",
                },
            ],
            response: "{\n" +
                "    /** Player UUID */\n" +
                "    Subject: string;\n" +
                "    Version: number;\n" +
                "    Guns: {\n" +
                "        /** UUID */\n" +
                "        ID: string;\n" +
                "        /** UUID */\n" +
                "        CharmInstanceID?: string | undefined;\n" +
                "        /** UUID */\n" +
                "        CharmID?: string | undefined;\n" +
                "        /** UUID */\n" +
                "        CharmLevelID?: string | undefined;\n" +
                "        /** UUID */\n" +
                "        SkinID: string;\n" +
                "        /** UUID */\n" +
                "        SkinLevelID: string;\n" +
                "        /** UUID */\n" +
                "        ChromaID: string;\n" +
                "        Attachments: unknown[];\n" +
                "    }[];\n" +
                "    Sprays: {\n" +
                "        /** UUID */\n" +
                "        EquipSlotID: string;\n" +
                "        /** UUID */\n" +
                "        SprayID: string;\n" +
                "        SprayLevelID: null;\n" +
                "    }[];\n" +
                "    Identity: {\n" +
                "        /** UUID */\n" +
                "        PlayerCardID: string;\n" +
                "        /** UUID */\n" +
                "        PlayerTitleID: string;\n" +
                "        AccountLevel: number;\n" +
                "        /** UUID */\n" +
                "        PreferredLevelBorderID: string;\n" +
                "        HideAccountLevel: boolean;\n" +
                "    };\n" +
                "    Incognito: boolean;\n" +
                "};",
        }
    }, // Player Loadout
    {
        route: {
            path: "set-player-loadout",
            title: "Set Player Loadout",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/personalization/v2/players/{puuid}/playerloadout",
            title: "Set Player Loadout",
            httpMethod: HttpMethod.PUT,
            description: "Set the players current loadout. Only works with authenticated user.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{puuid}",
                    description: "A players UUID.",
                },
            ],
            response: "{\n" +
                "    /** Player UUID */\n" +
                "    Subject: string;\n" +
                "    Version: number;\n" +
                "    Guns: {\n" +
                "        /** UUID */\n" +
                "        ID: string;\n" +
                "        /** UUID */\n" +
                "        CharmInstanceID?: string | undefined;\n" +
                "        /** UUID */\n" +
                "        CharmID?: string | undefined;\n" +
                "        /** UUID */\n" +
                "        CharmLevelID?: string | undefined;\n" +
                "        /** UUID */\n" +
                "        SkinID: string;\n" +
                "        /** UUID */\n" +
                "        SkinLevelID: string;\n" +
                "        /** UUID */\n" +
                "        ChromaID: string;\n" +
                "        Attachments: unknown[];\n" +
                "    }[];\n" +
                "    Sprays: {\n" +
                "        /** UUID */\n" +
                "        EquipSlotID: string;\n" +
                "        /** UUID */\n" +
                "        SprayID: string;\n" +
                "        SprayLevelID: null;\n" +
                "    }[];\n" +
                "    Identity: {\n" +
                "        /** UUID */\n" +
                "        PlayerCardID: string;\n" +
                "        /** UUID */\n" +
                "        PlayerTitleID: string;\n" +
                "        AccountLevel: number;\n" +
                "        /** UUID */\n" +
                "        PreferredLevelBorderID: string;\n" +
                "        HideAccountLevel: boolean;\n" +
                "    };\n" +
                "    Incognito: boolean;\n" +
                "};",
            body: "{\n" +
                "    Guns: {\n" +
                "        /** UUID */\n" +
                "        ID: string;\n" +
                "        /** UUID */\n" +
                "        CharmInstanceID?: string | undefined;\n" +
                "        /** UUID */\n" +
                "        CharmID?: string | undefined;\n" +
                "        /** UUID */\n" +
                "        CharmLevelID?: string | undefined;\n" +
                "        /** UUID */\n" +
                "        SkinID: string;\n" +
                "        /** UUID */\n" +
                "        SkinLevelID: string;\n" +
                "        /** UUID */\n" +
                "        ChromaID: string;\n" +
                "        Attachments: unknown[];\n" +
                "    }[];\n" +
                "    Sprays: {\n" +
                "        /** UUID */\n" +
                "        EquipSlotID: string;\n" +
                "        /** UUID */\n" +
                "        SprayID: string;\n" +
                "        SprayLevelID: null;\n" +
                "    }[];\n" +
                "    Identity: {\n" +
                "        /** UUID */\n" +
                "        PlayerCardID: string;\n" +
                "        /** UUID */\n" +
                "        PlayerTitleID: string;\n" +
                "        AccountLevel: number;\n" +
                "        /** UUID */\n" +
                "        PreferredLevelBorderID: string;\n" +
                "        HideAccountLevel: boolean;\n" +
                "    };\n" +
                "    Incognito: boolean;\n" +
                "};",
        }
    }, // Set Player Loadout
    {
        route: {
            path: "player-mmr",
            title: "Player MMR",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/mmr/v1/players/{puuid}",
            title: "Player MMR",
            httpMethod: HttpMethod.GET,
            description: "Retrieve season overview for every played season of the specified player.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{puuid}",
                    description: "A players UUID.",
                },
            ],
            response: "{\n" +
                "    Version: number;\n" +
                "    /** Player UUID */\n" +
                "    Subject: string;\n" +
                "    NewPlayerExperienceFinished: boolean;\n" +
                "    QueueSkills: {\n" +
                "        [x: string]: {\n" +
                "            TotalGamesNeededForRating: number;\n" +
                "            TotalGamesNeededForLeaderboard: number;\n" +
                "            CurrentSeasonGamesNeededForRating: number;\n" +
                "            SeasonalInfoBySeasonID: {\n" +
                "                [x: string]: {\n" +
                "                    /** Season ID */\n" +
                "                    SeasonID: string;\n" +
                "                    NumberOfWins: number;\n" +
                "                    NumberOfWinsWithPlacements: number;\n" +
                "                    NumberOfGames: number;\n" +
                "                    Rank: number;\n" +
                "                    CapstoneWins: number;\n" +
                "                    LeaderboardRank: number;\n" +
                "                    CompetitiveTier: number;\n" +
                "                    RankedRating: number;\n" +
                "                    WinsByTier: {\n" +
                "                        [x: string]: number;\n" +
                "                    } | null;\n" +
                "                    GamesNeededForRating: number;\n" +
                "                    TotalWinsNeededForRank: number;\n" +
                "                };\n" +
                "            };\n" +
                "        };\n" +
                "    };\n" +
                "    LatestCompetitiveUpdate: {\n" +
                "        /** Match ID */\n" +
                "        MatchID: string;\n" +
                "        /** Map ID */\n" +
                "        MapID: string;\n" +
                "        /** Season ID */\n" +
                "        SeasonID: string;\n" +
                "        MatchStartTime: number;\n" +
                "        TierAfterUpdate: number;\n" +
                "        TierBeforeUpdate: number;\n" +
                "        RankedRatingAfterUpdate: number;\n" +
                "        RankedRatingBeforeUpdate: number;\n" +
                "        RankedRatingEarned: number;\n" +
                "        RankedRatingPerformanceBonus: number;\n" +
                "        CompetitiveMovement: \"MOVEMENT_UNKNOWN\";\n" +
                "        AFKPenalty: number;\n" +
                "    };\n" +
                "    IsLeaderboardAnonymized: boolean;\n" +
                "    IsActRankBadgeHidden: boolean;\n" +
                "};",
        }
    }, // Player MMR
    {
        route: {
            path: "match-history",
            title: "Match History",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/match-history/v1/history/{puuid}?startIndex={startIndex}&endIndex={endIndex}&queue={queue}",
            title: "Match History",
            httpMethod: HttpMethod.GET,
            description: "Retrieve match history for the given player. " +
                "The endIndex is allowed to be 25 higher then startIndex. " +
                "Trying to retrieve too many matches will return 400.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{puuid}",
                    description: "A players UUID.",
                },
                {
                    title: "{startIndex}",
                    description: "The index of the first match to return. Default: 0",
                    optional: true,
                },
                {
                    title: "{endIndex}",
                    description: "The index of the last match to return. Default: 10",
                    optional: true,
                },
                {
                    title: "{queue}",
                    description: "The QueueSkill to filter. (e.g. competitive) Default: all",
                    optional: true,
                },
            ],
            response: "{\n" +
                "    /** Player UUID */\n" +
                "    Subject: string;\n" +
                "    BeginIndex: number;\n" +
                "    EndIndex: number;\n" +
                "    Total: number;\n" +
                "    History: {\n" +
                "        /** Match ID */\n" +
                "        MatchID: string;\n" +
                "        /** Milliseconds since epoch */\n" +
                "        GameStartTime: number;\n" +
                "        /** Queue ID */\n" +
                "        QueueID: string;\n" +
                "    }[];\n" +
                "};",
        }
    }, // Match History
    {
        route: {
            path: "match-details",
            title: "Match Details",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/match-details/v1/matches/{matchID}",
            title: "Player Loadout",
            httpMethod: HttpMethod.GET,
            description: "Retrieve the details of a completed match.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{matchID}",
                    description: "The match UUID.",
                },
            ],
            response: "{\n" +
                "    matchInfo: {\n" +
                "        /** Match ID */\n" +
                "        matchId: string;\n" +
                "        /** Map ID */\n" +
                "        mapId: string;\n" +
                "        gamePodId: string;\n" +
                "        gameLoopZone: string;\n" +
                "        gameServerAddress: string;\n" +
                "        gameVersion: string;\n" +
                "        gameLengthMillis: number | null;\n" +
                "        gameStartMillis: number;\n" +
                "        provisioningFlowID: \"Matchmaking\" | \"CustomGame\";\n" +
                "        isCompleted: boolean;\n" +
                "        customGameName: string;\n" +
                "        forcePostProcessing: boolean;\n" +
                "        /** Queue ID */\n" +
                "        queueID: string;\n" +
                "        /** Game Mode */\n" +
                "        gameMode: string;\n" +
                "        isRanked: boolean;\n" +
                "        isMatchSampled: boolean;\n" +
                "        /** Season ID */\n" +
                "        seasonId: string;\n" +
                "        completionState: \"Surrendered\" | \"Completed\" | \"VoteDraw\" | \"\";\n" +
                "        platformType: \"PC\";\n" +
                "        premierMatchInfo: {};\n" +
                "        partyRRPenalties?: {\n" +
                "            [x: string]: number;\n" +
                "        } | undefined;\n" +
                "        shouldMatchDisablePenalties: boolean;\n" +
                "    };\n" +
                "    players: {\n" +
                "        /** Player UUID */\n" +
                "        subject: string;\n" +
                "        gameName: string;\n" +
                "        tagLine: string;\n" +
                "        platformInfo: {\n" +
                "            platformType: \"PC\";\n" +
                "            platformOS: \"Windows\";\n" +
                "            platformOSVersion: string;\n" +
                "            platformChipset: \"Unknown\";\n" +
                "        };\n" +
                "        teamId: (\"Blue\" | \"Red\") | string;\n" +
                "        /** Party ID */\n" +
                "        partyId: string;\n" +
                "        /** Character ID */\n" +
                "        characterId: string;\n" +
                "        stats: {\n" +
                "            score: number;\n" +
                "            roundsPlayed: number;\n" +
                "            kills: number;\n" +
                "            deaths: number;\n" +
                "            assists: number;\n" +
                "            playtimeMillis: number;\n" +
                "            abilityCasts?: ({\n" +
                "                grenadeCasts: number;\n" +
                "                ability1Casts: number;\n" +
                "                ability2Casts: number;\n" +
                "                ultimateCasts: number;\n" +
                "            } | null) | undefined;\n" +
                "        } | null;\n" +
                "        roundDamage: {\n" +
                "            round: number;\n" +
                "            /** Player UUID */\n" +
                "            receiver: string;\n" +
                "            damage: number;\n" +
                "        }[] | null;\n" +
                "        competitiveTier: number;\n" +
                "        isObserver: boolean;\n" +
                "        /** Card ID */\n" +
                "        playerCard: string;\n" +
                "        /** Title ID */\n" +
                "        playerTitle: string;\n" +
                "        /** Preferred Level Border ID */\n" +
                "        preferredLevelBorder?: (string | \"\") | undefined;\n" +
                "        accountLevel: number;\n" +
                "        sessionPlaytimeMinutes?: (number | null) | undefined;\n" +
                "        xpModifications?: {\n" +
                "            /** XP multiplier */\n" +
                "            Value: number;\n" +
                "            /** XP Modification ID */\n" +
                "            ID: string;\n" +
                "        }[] | undefined;\n" +
                "        behaviorFactors?: {\n" +
                "            afkRounds: number;\n" +
                "            /** Float value of unknown significance. Possibly used to quantify how much the player was in the way of their teammates? */\n" +
                "            collisions?: number | undefined;\n" +
                "            commsRatingRecovery: number;\n" +
                "            damageParticipationOutgoing: number;\n" +
                "            friendlyFireIncoming?: number | undefined;\n" +
                "            friendlyFireOutgoing?: number | undefined;\n" +
                "            mouseMovement?: number | undefined;\n" +
                "            stayedInSpawnRounds?: number | undefined;\n" +
                "        } | undefined;\n" +
                "        newPlayerExperienceDetails?: {\n" +
                "            basicMovement: {\n" +
                "                idleTimeMillis: 0;\n" +
                "                objectiveCompleteTimeMillis: 0;\n" +
                "            };\n" +
                "            basicGunSkill: {\n" +
                "                idleTimeMillis: 0;\n" +
                "                objectiveCompleteTimeMillis: 0;\n" +
                "            };\n" +
                "            adaptiveBots: {\n" +
                "                adaptiveBotAverageDurationMillisAllAttempts: 0;\n" +
                "                adaptiveBotAverageDurationMillisFirstAttempt: 0;\n" +
                "                killDetailsFirstAttempt: null;\n" +
                "                idleTimeMillis: 0;\n" +
                "                objectiveCompleteTimeMillis: 0;\n" +
                "            };\n" +
                "            ability: {\n" +
                "                idleTimeMillis: 0;\n" +
                "                objectiveCompleteTimeMillis: 0;\n" +
                "            };\n" +
                "            bombPlant: {\n" +
                "                idleTimeMillis: 0;\n" +
                "                objectiveCompleteTimeMillis: 0;\n" +
                "            };\n" +
                "            defendBombSite: {\n" +
                "                success: false;\n" +
                "                idleTimeMillis: 0;\n" +
                "                objectiveCompleteTimeMillis: 0;\n" +
                "            };\n" +
                "            settingStatus: {\n" +
                "                isMouseSensitivityDefault: boolean;\n" +
                "                isCrosshairDefault: boolean;\n" +
                "            };\n" +
                "            versionString: \"\";\n" +
                "        } | undefined;\n" +
                "    }[];\n" +
                "    bots: unknown[];\n" +
                "    coaches: {\n" +
                "        /** Player UUID */\n" +
                "        subject: string;\n" +
                "        teamId: \"Blue\" | \"Red\";\n" +
                "    }[];\n" +
                "    teams: {\n" +
                "        teamId: (\"Blue\" | \"Red\") | string;\n" +
                "        won: boolean;\n" +
                "        roundsPlayed: number;\n" +
                "        roundsWon: number;\n" +
                "        numPoints: number;\n" +
                "    }[] | null;\n" +
                "    roundResults: {\n" +
                "        roundNum: number;\n" +
                "        roundResult: \"Eliminated\" | \"Bomb detonated\" | \"Bomb defused\" | \"Surrendered\" | \"Round timer expired\";\n" +
                "        roundCeremony: \"CeremonyDefault\" | \"CeremonyTeamAce\" | \"CeremonyFlawless\" | \"CeremonyCloser\" | \"CeremonyClutch\" | \"CeremonyThrifty\" | \"CeremonyAce\" | \"\";\n" +
                "        winningTeam: (\"Blue\" | \"Red\") | string;\n" +
                "        /** Player UUID */\n" +
                "        bombPlanter?: string | undefined;\n" +
                "        bombDefuser?: ((\"Blue\" | \"Red\") | string) | undefined;\n" +
                "        /** Time in milliseconds since the start of the round when the bomb was planted. 0 if not planted */\n" +
                "        plantRoundTime?: number | undefined;\n" +
                "        plantPlayerLocations: {\n" +
                "            /** Player UUID */\n" +
                "            subject: string;\n" +
                "            viewRadians: number;\n" +
                "            location: {\n" +
                "                x: number;\n" +
                "                y: number;\n" +
                "            };\n" +
                "        }[] | null;\n" +
                "        plantLocation: {\n" +
                "            x: number;\n" +
                "            y: number;\n" +
                "        };\n" +
                "        plantSite: \"A\" | \"B\" | \"C\" | \"\";\n" +
                "        /** Time in milliseconds since the start of the round when the bomb was defused. 0 if not defused */\n" +
                "        defuseRoundTime?: number | undefined;\n" +
                "        defusePlayerLocations: {\n" +
                "            /** Player UUID */\n" +
                "            subject: string;\n" +
                "            viewRadians: number;\n" +
                "            location: {\n" +
                "                x: number;\n" +
                "                y: number;\n" +
                "            };\n" +
                "        }[] | null;\n" +
                "        defuseLocation: {\n" +
                "            x: number;\n" +
                "            y: number;\n" +
                "        };\n" +
                "        playerStats: {\n" +
                "            /** Player UUID */\n" +
                "            subject: string;\n" +
                "            kills: {\n" +
                "                /** Time in milliseconds since the start of the game */\n" +
                "                gameTime: number;\n" +
                "                /** Time in milliseconds since the start of the round */\n" +
                "                roundTime: number;\n" +
                "                /** Player UUID */\n" +
                "                killer: string;\n" +
                "                /** Player UUID */\n" +
                "                victim: string;\n" +
                "                victimLocation: {\n" +
                "                    x: number;\n" +
                "                    y: number;\n" +
                "                };\n" +
                "                assistants: string[];\n" +
                "                playerLocations: {\n" +
                "                    /** Player UUID */\n" +
                "                    subject: string;\n" +
                "                    viewRadians: number;\n" +
                "                    location: {\n" +
                "                        x: number;\n" +
                "                        y: number;\n" +
                "                    };\n" +
                "                }[];\n" +
                "                finishingDamage: {\n" +
                "                    damageType: \"Weapon\" | \"Bomb\" | \"Ability\" | \"Fall\" | \"Melee\" | \"Invalid\" | \"\";\n" +
                "                    /** Item ID of the weapon used to kill the player. Empty string if the player was killed by the spike, fall damage, or melee. */\n" +
                "                    damageItem: (string | (\"Ultimate\" | \"Ability1\" | \"Ability2\" | \"GrenadeAbility\" | \"Primary\")) | \"\";\n" +
                "                    isSecondaryFireMode: boolean;\n" +
                "                };\n" +
                "            }[];\n" +
                "            damage: {\n" +
                "                /** Player UUID */\n" +
                "                receiver: string;\n" +
                "                damage: number;\n" +
                "                legshots: number;\n" +
                "                bodyshots: number;\n" +
                "                headshots: number;\n" +
                "            }[];\n" +
                "            score: number;\n" +
                "            economy: {\n" +
                "                loadoutValue: number;\n" +
                "                /** Item ID */\n" +
                "                weapon: string | \"\";\n" +
                "                /** Armor ID */\n" +
                "                armor: string | \"\";\n" +
                "                remaining: number;\n" +
                "                spent: number;\n" +
                "            };\n" +
                "            ability: {\n" +
                "                grenadeEffects: null;\n" +
                "                ability1Effects: null;\n" +
                "                ability2Effects: null;\n" +
                "                ultimateEffects: null;\n" +
                "            };\n" +
                "            wasAfk: boolean;\n" +
                "            wasPenalized: boolean;\n" +
                "            stayedInSpawn: boolean;\n" +
                "        }[];\n" +
                "        /** Empty string if the timer expired */\n" +
                "        roundResultCode: \"Elimination\" | \"Detonate\" | \"Defuse\" | \"Surrendered\" | \"\";\n" +
                "        playerEconomies: {\n" +
                "            /** Player UUID */\n" +
                "            subject: string;\n" +
                "            loadoutValue: number;\n" +
                "            /** Item ID */\n" +
                "            weapon: string | \"\";\n" +
                "            /** Armor ID */\n" +
                "            armor: string | \"\";\n" +
                "            remaining: number;\n" +
                "            spent: number;\n" +
                "        }[] | null;\n" +
                "        playerScores: {\n" +
                "            /** Player UUID */\n" +
                "            subject: string;\n" +
                "            score: number;\n" +
                "        }[] | null;\n" +
                "    }[] | null;\n" +
                "    kills: {\n" +
                "        /** Time in milliseconds since the start of the game */\n" +
                "        gameTime: number;\n" +
                "        /** Time in milliseconds since the start of the round */\n" +
                "        roundTime: number;\n" +
                "        /** Player UUID */\n" +
                "        killer: string;\n" +
                "        /** Player UUID */\n" +
                "        victim: string;\n" +
                "        victimLocation: {\n" +
                "            x: number;\n" +
                "            y: number;\n" +
                "        };\n" +
                "        assistants: string[];\n" +
                "        playerLocations: {\n" +
                "            /** Player UUID */\n" +
                "            subject: string;\n" +
                "            viewRadians: number;\n" +
                "            location: {\n" +
                "                x: number;\n" +
                "                y: number;\n" +
                "            };\n" +
                "        }[];\n" +
                "        finishingDamage: {\n" +
                "            damageType: \"Weapon\" | \"Bomb\" | \"Ability\" | \"Fall\" | \"Melee\" | \"Invalid\" | \"\";\n" +
                "            /** Item ID of the weapon used to kill the player. Empty string if the player was killed by the spike, fall damage, or melee. */\n" +
                "            damageItem: (string | (\"Ultimate\" | \"Ability1\" | \"Ability2\" | \"GrenadeAbility\" | \"Primary\")) | \"\";\n" +
                "            isSecondaryFireMode: boolean;\n" +
                "        };\n" +
                "        round: number;\n" +
                "    }[] | null;\n" +
                "};",
        }
    }, // Match Details
    {
        route: {
            path: "competitive-updates",
            title: "Competitive Updates",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/mmr/v1/players/{puuid}/competitiveupdates?startIndex={startIndex}&endIndex={endIndex}&queue={queue}",
            title: "Competitive Updates",
            httpMethod: HttpMethod.GET,
            description: "Retrieve match history for the given player and how they changed ranking. " +
                "The endIndex is allowed to be 20 higher then startIndex. " +
                "Trying to retrieve too many matches will return 400.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{puuid}",
                    description: "A players UUID.",
                },
                {
                    title: "{startIndex}",
                    description: "The index of the first match to return. Default: 0",
                    optional: true,
                },
                {
                    title: "{endIndex}",
                    description: "The index of the first match to return. Default: 10",
                    optional: true,
                },
                {
                    title: "{queue}",
                    description: "The QueueSkill to filter. (e.g. competitive) Default: all",
                    optional: true,
                },
            ],
            response: "{\n" +
                "    Version: number;\n" +
                "    /** Player UUID */\n" +
                "    Subject: string;\n" +
                "    Matches: {\n" +
                "        /** Match ID */\n" +
                "        MatchID: string;\n" +
                "        /** Map ID */\n" +
                "        MapID: string;\n" +
                "        /** Season ID */\n" +
                "        SeasonID: string;\n" +
                "        /** Milliseconds since epoch */\n" +
                "        MatchStartTime: number;\n" +
                "        TierAfterUpdate: number;\n" +
                "        TierBeforeUpdate: number;\n" +
                "        RankedRatingAfterUpdate: number;\n" +
                "        RankedRatingBeforeUpdate: number;\n" +
                "        RankedRatingEarned: number;\n" +
                "        RankedRatingPerformanceBonus: number;\n" +
                "        CompetitiveMovement: \"MOVEMENT_UNKNOWN\";\n" +
                "        AFKPenalty: number;\n" +
                "    }[];\n" +
                "};",
        }
    }, // Competitive Updates
    {
        route: {
            path: "leaderboard",
            title: "Leaderboard",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/mmr/v1/leaderboards/affinity/{region}/queue/competitive/season/{season id}?startIndex={startIndex}&size={size}&query={query}",
            title: "Leaderboard",
            httpMethod: HttpMethod.GET,
            description: "Retrieve leaderboard for a given season." +
                "The size is allowed to be 1000 higher then startIndex. " +
                "Trying to retrieve too many matches will return a maximum of 1000 players.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{region}",
                    description: "Usually the same as shard.\nThere are 6 regions: na, latam, br, eu, ap, kr",
                },
                {
                    title: "{season_id}",
                    description: "Determines from which season the leaderboard should be retrieved.",
                },
                {
                    title: "{startIndex}",
                    description: "The index of the first leaderboardRank to return.",
                },
                {
                    title: "{size}",
                    description: "The index of the last leaderboardRank to return.",
                },
                {
                    title: "{query}",
                    description: "An username to search for. Default: none",
                    optional: true,
                },
            ],
            response: "{\n" +
                "    Deployment: string;\n" +
                "    /** Queue ID */\n" +
                "    QueueID: string;\n" +
                "    /** Season ID */\n" +
                "    SeasonID: string;\n" +
                "    Players: {\n" +
                "        /** Card ID */\n" +
                "        PlayerCardID: string;\n" +
                "        /** Title ID */\n" +
                "        TitleID: string;\n" +
                "        IsBanned: boolean;\n" +
                "        IsAnonymized: boolean;\n" +
                "        /** Player UUID */\n" +
                "        puuid: string;\n" +
                "        gameName: string;\n" +
                "        tagLine: string;\n" +
                "        leaderboardRank: number;\n" +
                "        rankedRating: number;\n" +
                "        numberOfWins: number;\n" +
                "        competitiveTier: number;\n" +
                "    }[];\n" +
                "    totalPlayers: number;\n" +
                "    immortalStartingPage: number;\n" +
                "    immortalStartingIndex: number;\n" +
                "    topTierRRThreshold: number;\n" +
                "    tierDetails: {\n" +
                "        [x: string]: {\n" +
                "            rankedRatingThreshold: number;\n" +
                "            startingPage: number;\n" +
                "            startingIndex: number;\n" +
                "        };\n" +
                "    };\n" +
                "    startIndex: number;\n" +
                "    query: string;\n" +
                "};",
        }
    }, // Leaderboard
    {
        route: {
            path: "penalties",
            title: "Penalties",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/restrictions/v3/penalties",
            title: "Penalties",
            httpMethod: HttpMethod.GET,
            description: "Retrieve matchmaking penalties for the authorized player.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
            ],
            response: "{\n" +
                "    /** Player UUID */\n" +
                "    Subject: string;\n" +
                "    Penalties: unknown[];\n" + // TODO
                "    Version: number;\n" +
                "};",
        }
    }, // Penalties
    {
        route: {
            path: "config",
            title: "Config",
        },
        endpoint: {
            url: "https://shared.{shard}.a.pvp.net/v1/config/{region}",
            title: "Config",
            httpMethod: HttpMethod.GET,
            description: "Retrieve config for the authorized player.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
                {
                    title: "{region}",
                    description: "Usually the same as shard.\nThere are 6 regions: na, latam, br, eu, ap, kr",
                },
            ],
            response: "{\n" +
                "    /** Date in ISO 8601 format with sub-second precision */\n" +
                "    LastApplication: string;\n" +
                "    Collapsed: {\n" +
                "        ARES_MOC_ENTITLEMENT: string;\n" +
                "        \"CLIENT.ICONS.ENABLED\": string;\n" +
                "        CLIENT_LEADERBOARDS_ENABLED: string;\n" +
                "        GAME_ALLOW_CONSOLE: string;\n" +
                "        GAME_ALLOW_DEVELOPER_MENU: string;\n" +
                "        GAME_DISABLED_DEATHCAM: string;\n" +
                "        GAME_DISABLED_SKINS_WEAPONS: string;\n" +
                "        GAME_PERFREPORTING_ENABLED: string;\n" +
                "        GAME_REMOTE_MOVE_INTERP_ENABLED: string;\n" +
                "        GAME_ROAMINGSETTINGS_ENABLED: string;\n" +
                "        GAME_ROAMINGSETTINGS_KEY: string;\n" +
                "        GAME_ROAMINGSETTINGS_STORAGEURL: string;\n" +
                "        MAP_PRELOADING_ENABLED: string;\n" +
                "        NAMECHECK_PLATFORM_REGION: string;\n" +
                "        NAMECHECK_PLATFORM_URL: string;\n" +
                "        ROSTER_REALM: string;\n" +
                "        SECURITY_WATERMARK_ENABLED: string;\n" +
                "        SECURITY_WATERMARK_MAX_OPACITY: string;\n" +
                "        SECURITY_WATERMARK_MIN_OPACITY: string;\n" +
                "        SECURITY_WATERMARK_TILING_FACTOR: string;\n" +
                "        SERVICEURL_ACCOUNT_XP: string;\n" +
                "        SERVICEURL_AGGSTATS: string;\n" +
                "        SERVICEURL_AVS: string;\n" +
                "        SERVICEURL_CONTENT: string;\n" +
                "        SERVICEURL_CONTRACTS: string;\n" +
                "        SERVICEURL_CONTRACT_DEFINITIONS: string;\n" +
                "        SERVICEURL_COREGAME: string;\n" +
                "        SERVICEURL_DAILY_TICKET: string;\n" +
                "        SERVICEURL_FAVORITES: string;\n" +
                "        SERVICEURL_GALBS_QUERY: string;\n" +
                "        SERVICEURL_LATENCY: string;\n" +
                "        SERVICEURL_LOGINQUEUE: string;\n" +
                "        SERVICEURL_MASS_REWARDS: string;\n" +
                "        SERVICEURL_MATCHDETAILS: string;\n" +
                "        SERVICEURL_MATCHHISTORY: string;\n" +
                "        SERVICEURL_MATCHMAKING: string;\n" +
                "        SERVICEURL_MMR: string;\n" +
                "        SERVICEURL_NAME: string;\n" +
                "        SERVICEURL_PARTY: string;\n" +
                "        SERVICEURL_PATCHNOTES: string;\n" +
                "        SERVICEURL_PERSONALIZATION: string;\n" +
                "        SERVICEURL_PLAYERFEEDBACK: string;\n" +
                "        SERVICEURL_PREGAME: string;\n" +
                "        SERVICEURL_PREMIER: string;\n" +
                "        SERVICEURL_PROGRESSION: string;\n" +
                "        SERVICEURL_PURCHASEMERCHANT: string;\n" +
                "        SERVICEURL_REPLAY_CATALOG: string;\n" +
                "        SERVICEURL_RESTRICTIONS: string;\n" +
                "        SERVICEURL_SESSION: string;\n" +
                "        SERVICEURL_STORE: string;\n" +
                "        SERVICEURL_TOURNAMENTS: string;\n" +
                "        SERVICE_TICKER_MESSAGE: string;\n" +
                "        \"SERVICE_TICKER_MESSAGE.de-DE\": string;\n" +
                "        \"SERVICE_TICKER_MESSAGE.es-MX\": string;\n" +
                "        \"SERVICE_TICKER_MESSAGE.fr-FR\": string;\n" +
                "        \"SERVICE_TICKER_MESSAGE.it-IT\": string;\n" +
                "        \"SERVICE_TICKER_MESSAGE.pl-PL\": string;\n" +
                "        \"SERVICE_TICKER_MESSAGE.pt-BR\": string;\n" +
                "        \"SERVICE_TICKER_MESSAGE.ru-RU\": string;\n" +
                "        \"SERVICE_TICKER_MESSAGE.tr-TR\": string;\n" +
                "        SERVICE_TICKER_SEVERITY: string;\n" +
                "        STORESCREEN_OFFERREFRESH_MAXDELAY_MILLISECONDS: string;\n" +
                "        \"avs.enabled\": string;\n" +
                "        \"cap.location\": string;\n" +
                "        \"characterselect.debugwidgets.hide\": string;\n" +
                "        \"chat.mutedwords.enabled\": string;\n" +
                "        \"chat.v3.enabled\": string;\n" +
                "        \"collection.characters.enabled\": string;\n" +
                "        competitiveSeasonOffsetEndTime: string;\n" +
                "        \"config.client.telemetry.samplerate\": string;\n" +
                "        \"content.filter.enabled\": string;\n" +
                "        \"content.maps.disabled\": string;\n" +
                "        \"eog.wip\": string;\n" +
                "        \"friends.enabled\": string;\n" +
                "        \"game.umgchat.enabled\": string;\n" +
                "        \"homescreen.featuredQueues\": string;\n" +
                "        \"homescreen.patchnotes.baseURL\": string;\n" +
                "        \"homescreen.promo.enabled\": string;\n" +
                "        \"homescreen.promo.key\": string;\n" +
                "        \"homescreen.webtile.baseURL\": string;\n" +
                "        \"loginqueue.region\": string;\n" +
                "        \"mainmenubar.collections.enabled\": string;\n" +
                "        \"mainmenubar.debug.enabled\": string;\n" +
                "        \"mainmenubar.profile.enabled\": string;\n" +
                "        \"mainmenubar.progression.enabled\": string;\n" +
                "        \"mainmenubar.shootingrange.enabled\": string;\n" +
                "        \"mainmenubar.store.enabled\": string;\n" +
                "        \"match.details.delay\": string;\n" +
                "        \"notifications.enabled\": string;\n" +
                "        \"parties.auto.balance.enabled\": string;\n" +
                "        \"party.observers.enabled\": string;\n" +
                "        \"partyinvites.enabled\": string;\n" +
                "        \"patchavailability.enabled\": string;\n" +
                "        \"personalization.equipAnyLevel.enabled\": string;\n" +
                "        \"personalization.useWidePlayerIdentityV2\": string;\n" +
                "        \"ping.update.interval\": string;\n" +
                "        \"ping.useGamePodsFromParties\": string;\n" +
                "        \"platformFaulted.level\": string;\n" +
                "        \"playerfeedbacktool.accessurl\": string;\n" +
                "        \"playerfeedbacktool.locale\": string;\n" +
                "        \"playerfeedbacktool.shard\": string;\n" +
                "        \"playerfeedbacktool.show\": string;\n" +
                "        \"playerfeedbacktool.survey_request_rate_float\": string;\n" +
                "        \"playscreen.partywidget.enabled\": string;\n" +
                "        \"playscreen.partywidget.matchmaking.maxsize\": string;\n" +
                "        \"playscreen.premier.enabled\": string;\n" +
                "        \"premier.conferences.fetch.enabled\": string;\n" +
                "        \"premier.leaderboardTab.enabled\": string;\n" +
                "        \"premier.matchHistoryTab.enabled\": string;\n" +
                "        \"premier.playscreenflow.enabled\": string;\n" +
                "        \"premier.rosterEligibilityCheck.enabled\": string;\n" +
                "        \"premier.seasons.activeseason.enabled\": string;\n" +
                "        \"premier.seasons.fetch.enabled\": string;\n" +
                "        \"queue.status.enabled\": string;\n" +
                "        \"rchat.ingame.enabled\": string;\n" +
                "        \"reporterfeedback.fetch.enabled\": string;\n" +
                "        \"reporterfeedback.notifications.enabled\": string;\n" +
                "        \"restrictions.v2.fetch.enabled\": string;\n" +
                "        \"restrictions.v2.warnings.enabled\": string;\n" +
                "        \"riotwarning.fetch.enabled\": string;\n" +
                "        \"riotwarning.notifications.enabled\": string;\n" +
                "        \"rnet.useAuthenticatedVoice\": string;\n" +
                "        \"russia.voice.enabled\": string;\n" +
                "        /** Comma separated list of PUUIDs */\n" +
                "        \"settings.livediagnostics.allowedplayers\": string;\n" +
                "        \"shootingtest.enabled\": string;\n" +
                "        \"skillrating.enabled\": string;\n" +
                "        \"skillrating.inGame.enabled\": string;\n" +
                "        \"skillrating.preGame.enabled\": string;\n" +
                "        \"social.panel.v6.enabled\": string;\n" +
                "        \"socialviewcontroller.enabled\": string;\n" +
                "        \"socialviewcontroller.v2.enabled\": string;\n" +
                "        \"store.isXgpDisabled\": string;\n" +
                "        \"store.use_currency_inventory_models\": string;\n" +
                "        \"store.use_platform_bundle_discounted_prices\": string;\n" +
                "        \"telemetry.rtp.eventendpoint\": string;\n" +
                "        \"telemetry.rtp.rfc190scope\": string;\n" +
                "        \"temp.voice.allowmuting\": string;\n" +
                "        \"tournaments.enabled\": string;\n" +
                "        \"tournaments.pregame.enabled\": string;\n" +
                "        \"vanguard.accessurl\": string;\n" +
                "        \"vanguard.netrequired\": string;\n" +
                "        \"voice.clutchmute.enabled\": string;\n" +
                "        \"voice.clutchmute.prompt.enabled\": string;\n" +
                "        \"voice.provider\": string;\n" +
                "        \"whisper.enabled\": string;\n" +
                "    };\n" +
                "};",
        }
    }, // Config
    {
        route: {
            path: "name-service",
            title: "Name Service",
        },
        endpoint: {
            url: "https://pd.{shard}.a.pvp.net/name-service/v2/players",
            title: "Name Service",
            httpMethod: HttpMethod.PUT,
            description: "Retrieve game names for puuids.",
            headers: defaultHeaders,
            urlParameters: [
                {
                    title: "{shard}",
                    description: "The shard determines where the Riot account was created.\nThere are 5 shards: na, pbe, eu, ap, kr",
                },
            ],
            response: "{\n" +
                "    DisplayName: string;\n" +
                "    /** Player UUID */\n" +
                "    Subject: string;\n" +
                "    GameName: string;\n" +
                "    TagLine: string;\n" +
                "}[];",
            body: "string[]",
        }
    }, // Name Service
]
