import React, { createContext, useEffect, useLayoutEffect, useState } from "react";
import type { User } from "../../models/user";
import { AccountService } from "../../api/accounts";
import { api } from "../../api/api";

type AuthContextType = {
    accessToken: string | undefined,
    user: User | undefined;
    isLoading: boolean;
    isError: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

type Props = {children: React.ReactNode};


export const AuthContext = createContext<AuthContextType | undefined>(undefined);



export const AuthProvider = ({children} : Props) => {
    const [accessToken, setAccessToken] = useState<string | undefined>();
    const [user, setUser] = useState<User | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        const accessTokenInterseptor = api.interceptors.request.use((config) => {
            config.headers.Authorization = accessToken 
                ? `Bearer ${accessToken}`
                : config.headers.Authorization;
                
            console.log(accessToken);
            return config;
        });

        return () => {
            api.interceptors.response.eject(accessTokenInterseptor);
        };
    }, [accessToken])

    useLayoutEffect(() => {
        const refresInterceptors = api.interceptors.response.use(
            (config) => config,
            async (error) => {
                if(error.response.status === 401){
                    const originalRequest = error.config;

                    try {
                        const response = await AccountService.refresh()

                        setAccessToken(response.data.result!.accessToken);
                        setUser({email: response.data.result!.email, id: response.data.result!.id} as User)

                        originalRequest.headers.Authorization = `Bearer ${
                            response.data.result!.accessToken
                    }`;

                        return api(originalRequest);
                    } catch {
                        setAccessToken(undefined)
                    }
                }

                return Promise.reject(error);
            }
        );
        
        return () => {
            api.interceptors.response.eject(refresInterceptors);
        }
    }, [])

    const login = async (email: string, password: string) => {
        try {
            setIsLoading(true);
            const response = await AccountService.login(email, password);

            setUser({
                id: response.data.result?.id,
                email: response.data.result?.email
            } as User);
            setAccessToken(response.data.result!.accessToken);
            setIsLoading(false);
        } catch {
            setIsLoading(false);
            setIsError(true);
            console.log("errors");
        }
    }

    
    const logout = async () => {
        try {
            await AccountService.logout();

            setAccessToken(undefined);
            setUser(undefined);
        } catch {
            setIsError(true);
            console.log("errors");
        }
    }

    return (
        <AuthContext.Provider value={{accessToken, user, isLoading, isError, login, logout}}> 
            {children} 
        </ AuthContext.Provider>
    )
    
    
};