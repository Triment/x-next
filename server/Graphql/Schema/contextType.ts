import { ContextType } from "@/server/YogaContext";
import { YogaInitialContext } from "graphql-yoga";

export interface ContextDefs extends ContextType, YogaInitialContext {}